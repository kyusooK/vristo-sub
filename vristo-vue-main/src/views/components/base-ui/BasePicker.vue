<template>
    <div>
        <v-text-field :label="label" v-model="searchKeyword"></v-text-field>
        <v-combobox
            :items="list"
            :item-text="nameField"
            :item-value="idField"
            :label="label"
            return-object
            v-model="selected"
            @change="select"
            solo
        ></v-combobox>
    </div>
</template>

<script>
import { ref, watch, computed, defineProps, defineEmits, onMounted } from 'vue';
import BaseRepository from '../../repository/BaseRepository';
import axios from 'axios';
import _ from 'lodash';

export default {
    name: 'BasePicker',
    components: {},
    props: {
        value: [String, Object, Array, Number, Boolean],
        editMode: Boolean,
        label: String,
        path: String,
        nameField: String,
        idField: String,
        searchApiPath: String,
        searchParameterName: String,
    },
    setup(props, { emit }) {
        const list = ref([]);
        const selected = ref(null);
        const referenceValue = ref(null);
        const searchKeyword = ref(null);
        const repository = ref(null);

        onMounted(async () => {
            repository.value = new BaseRepository(axios, props.path);

            if (props.value && typeof props.value === 'object' && Object.values(props.value)[0]) {
                const id = props.value[props.idField];
                const tmpValue = await repository.value.findById(id);
                if (tmpValue.data) {
                    const val = tmpValue.data;
                    referenceValue.value = val;
                }
            }

            if (props.editMode) {
                fillSelections();
            }
        });

        watch(selected, _.debounce(async () => {
        // Your debounced logic here
        }, 500), { immediate: true });

        watch(searchKeyword, _.debounce(async () => {
            const temp = await searchItems();
            list.value = temp;
        }, 500), { deep: true });

        const fillSelections = async () => {
            list.value = await repository.value.find(null);
        };

        const select = (val) => {
            referenceValue.value = val;
            if (val) {
                const uriParts = val._links.self.href.split('/');
                const id = uriParts.pop();
                val[props.idField] = id;
                const selectedValue = Object.assign({}, val);

                emit('update:value', selectedValue);
                emit('selected', selectedValue);
            } else {
                emit('update:value', null);
                emit('selected', null);
            }
        };

        const searchItems = async () => {
            const query = {
                apiPath: props.searchApiPath,
                parameters: {},
            };
            query.parameters[props.searchParameterName] = searchKeyword.value;

            return await repository.value.find(query);
        };

        return {
            list,
            selected,
            referenceValue,
            searchKeyword,
            repository,
            fillSelections,
            select,
            searchItems,
        };
    },
};
</script>

<style>
.my-combobox div {
    min-height: 24px !important;
}
</style>
