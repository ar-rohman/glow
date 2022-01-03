import Vue from 'vue';
import i18n from '@/plugins/i18n';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/styles/index.css';
import StringFormater from './plugins/StringFormater';
import DateFormater from './plugins/DateFormater';
import Converter from './plugins/Converter';
import Alert from './plugins/Alert';
import axios from './plugins/axios';
import initIdb from './storage/initIdb';

initIdb.init();
Vue.use(StringFormater);
Vue.use(DateFormater);
Vue.use(Converter);
Vue.use(Alert);
Vue.use(axios);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    i18n,
    render: (h) => h(App),
}).$mount('#app');
