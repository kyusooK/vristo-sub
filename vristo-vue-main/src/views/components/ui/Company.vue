<template>
    <div>
        <String label="Name" v-model="value.name" :editMode="editMode"/>
        <!-- <Address offline label="Address" v-model="value.address" :editMode="editMode" @change="change"/> -->
       
        <v-divider class="border-opacity-100 my-divider"></v-divider>
        <v-layout row justify-end>
            <v-btn
                width="64px"
                color="primary"
                @click="save"
            >
                저장
            </v-btn>
        </v-layout>
    </div>
</template>


<script>
// import Address from '../vo/Address.vue'
import String from '../primitives/String.vue'
import BaseEntity from '../base-ui/BaseEntity.vue'

export default {
    name: 'Company',
    mixins:[BaseEntity],
    components:{
        String,
        // Address
    },
    data: () => ({
        path: "menus"
    }),
}
</script>

