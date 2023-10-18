<template>
    <div>
        <String label="Name" v-model="value.name" :editMode="editMode"/>
        <Email label="Email" v-model="value.email" :editMode="editMode"/>
       
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
import String from '../primitives/String.vue'
import BaseEntity from '../base-ui/BaseEntity.vue'
import Email from '../vo/Email.vue';

export default {
    name: 'Company',
    mixins:[BaseEntity],
    components:{
    String,
    Email
},
    data: () => ({
        path: "menus"
    }),
}
</script>

