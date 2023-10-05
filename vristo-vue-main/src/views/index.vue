<template>
    <v-app id="inspire">
        <Snackbar/>
        <v-col cols="10" style="margin: 0px; padding: 0px;">
            <v-main>
                <v-container v-if="urlPath" style="max-width:100vw !important;" class="py-8 px-6 mt-10" fluid>
                    <router-view></router-view>
                </v-container>
                <v-container v-else class="py-8 px-6 mt-10" fluid>
                    <v-row>
                        <v-card
                            v-for="(card, index) in cards"
                            :key="index"
                            class="mx-auto"
                            style="height:300px; width:300px; margin-bottom:20px;"
                            outlined
                        >
                            <v-list-item>
                                <v-list-item-avatar class="mx-auto" size="80" style="margin-top:80px;">
                                    <v-icon color="primary" size="64">mdi-apps</v-icon>
                                </v-list-item-avatar>
                            </v-list-item>
                            
                            <v-card-actions>
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on }">
                                    <v-btn
                                        v-on="on"
                                        class="mx-auto"
                                        outlined
                                        rounded
                                        :to="card.link"
                                        @click="changeUrl()"
                                        style="font-weight:500; font-size:20px; border:solid 2px; max-width:250px; overflow:hidden"
                                    >
                                        {{ card.text }}
                                    </v-btn>
                                </template>
                                <span>{{ card.text }}</span>
                            </v-tooltip>
                            </v-card-actions>
                        </v-card>
                    </v-row>
                </v-container>
            </v-main>
        </v-col>
    </v-app>
</template>
<script>
import { ref, onMounted, computed } from 'vue';
import { useRouter } from 'vue-router';
// import BaseGrid from '../components/base-ui/BaseGrid.vue';

export default {
  name: 'App',
//   mixins: [BaseGrid],
  data: () => ({
    basicList: ref(false),
    basic: [
      { key: 'companies', name: 'Company', url: '/companies' },
      { key: 'ranks', name: 'Rank', url: '/ranks' },
    ],
    useComponent: '',
    drawer: ref(true),
    components: {},
    sideBar: ref(true),
    urlPath: ref(null),
    menus: [
      {
        id: 'basic',
        title: 'Basic',
        icon: 'ri:home-6-line',
        items: [
          { key: 'companies', url: '/companies', name: 'Company' },
          { key: 'ranks', url: '/ranks', name: 'Rank' },
        ],
      },
    ],
    cards: [
      {
        text: 'Company',
        link: '/companies',
      },
      {
        text: 'Rank',
        link: '/finance',
      },
    ],
    activeMenu: ref(null),
  }),

  setup() {
    const router = useRouter();

    const activeMenuItems = computed(() => {
      const activeMenu = this.menus.find((menu) => menu.id === this.activeMenu.value);
      return activeMenu ? activeMenu.items : [];
    });

    const changeMenu = (menuId) => {
      this.activeMenu.value = this.activeMenu.value === menuId ? null : menuId;
    };

    const changePath = (event) => {
      let targetUrl = event.currentTarget.getAttribute('data-to');
      router.push(targetUrl);
    };

    const openSideBar = () => {
      this.sideBar.value = !this.sideBar.value;
    };

    const changeUrl = () => {
      var path = document.location.href.split('#/');
      this.urlPath.value = path[1];
    };

    const goHome = () => {
      this.urlPath.value = null;
    };

    const openBasicList = () => {
      this.basicList.value = !this.basicList.value;
    };

    onMounted(async () => {
      await router.isReady(); // Wait for the router to be ready before accessing it
      changeUrl();
    });

    return {
      activeMenuItems,
      changeMenu,
      changePath,
      openSideBar,
      changeUrl,
      goHome,
      openBasicList,
    };
  },
};
</script>
