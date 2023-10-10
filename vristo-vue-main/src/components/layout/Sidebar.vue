<template>
    <nav class="sidebar fixed min-h-screen h-full top-0 bottom-0 w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] z-50 transition-all duration-300">
        <v-list v-model:opened="open">
            <v-list-item  title="무른모" to="/" @click="goHome()">
            </v-list-item>
            <perfect-scrollbar
                :options="{
                    swipeEasing: true,
                    wheelPropagation: false,
                }"
                class="h-[calc(100vh-80px)] relative"
            >
                <v-list-group v-if="sideBarList" v-for="firstMenu in sideBarList.firstMenu">
                    <template v-slot:activator="{ props }">
                        <v-list-item
                            v-bind="props"
                            :title="firstMenu.name"
                        ></v-list-item>
                    </template>
                    <v-list-group v-if="firstMenu" v-for="secondMenu in firstMenu.secondMenu">
                        <template v-slot:activator="{ props }">
                            <v-list-item
                            v-bind="props"
                            :title="secondMenu.name"
                            ></v-list-item>
                        </template>
                        <v-list-item
                            v-for="thirdMenu in secondMenu.thirdMenu"
                            :title="thirdMenu.name"
                            :value="thirdMenu.name"
                            to="/companies"
                            @click="changeUrl()"
                        ></v-list-item>
                    </v-list-group>
                </v-list-group>
            </perfect-scrollbar>
        </v-list>
    </nav>
</template>
<script>
    import BaseGrid from '@/views/components/base-ui/BaseGrid.vue';
    export default {
        name: 'Sidebar',
        mixins:[BaseGrid],
        components:{},
        data: () => ({
            sideBarList:[],
            open:[],
            urlPath: null
        }),
        async created(){
            this.sideBarList = await this.generateMenu()
        },
        computed:{
        },
        methods: {
            changeUrl() {
                var path = document.location.href.split("#/")
                this.urlPath = path[1];
            },
            goHome() {
                this.urlPath = null;
            },
        },
    }
</script>