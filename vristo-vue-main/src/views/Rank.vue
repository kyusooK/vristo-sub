<template>
    <div>
        <String label="Name" v-model="value.name" :editMode="editMode"/>

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

import BaseEntity from './components/base-ui/BaseEntity.vue'

export default {
    name: 'Rank',
    mixins:[BaseEntity],
    components:{
    },
    
    data: () => ({
        path: "menus"
    }),
    created(){
    },
    computed:{
    },
    methods: {
    },
}
</script>

