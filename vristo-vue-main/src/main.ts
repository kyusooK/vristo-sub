import { createApp } from 'vue';
import App from '@/App.vue';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import axios from 'axios';

axios.defaults.baseURL = ''

const vuetify = createVuetify({
    components,
    directives,
})
const fixUrl = async (path: string) => {
    if (!axios.defaults.baseURL && path.startsWith('/')) {
      return path;
    }
  
    let url;
  
    try {
      url = new URL(path);
    } catch (e) {
      url = new URL(axios.defaults.baseURL + path);
    }
  
    if (!axios.defaults.baseURL) {
      return url.pathname;
    }
  
    url.hostname = new URL(axios.defaults.baseURL).hostname;
    url.port = new URL(axios.defaults.baseURL).port;
  
    return url.href;
};

const app = createApp(App);

app.config.globalProperties.$axios = axios;
app.config.globalProperties.$fixUrl = fixUrl;

app.use(vuetify)
// pinia store
import { createPinia } from 'pinia';
const pinia = createPinia();
app.use(pinia);

import router from '@/router';
app.use(router);

// main app css
import '@/assets/css/app.css';

// perfect scrollbar
import PerfectScrollbar from 'vue3-perfect-scrollbar';
app.use(PerfectScrollbar);

//vue-meta
import { createHead } from '@vueuse/head';
const head = createHead();
app.use(head);

// set default settings
import appSetting from '@/app-setting';
appSetting.init();

//vue-i18n
import i18n from '@/i18n';
app.use(i18n);

// tippy tooltips
import { TippyPlugin } from 'tippy.vue';
app.use(TippyPlugin);

//input mask
import Maska from 'maska';
app.use(Maska);

//markdown editor
import VueEasymde from 'vue3-easymde';
import 'easymde/dist/easymde.min.css';
app.use(VueEasymde);

// popper
import Popper from 'vue3-popper';
app.component('Popper', Popper);

// json to excel
import vue3JsonExcel from 'vue3-json-excel';
app.use(vue3JsonExcel);

app.mount('#app');
