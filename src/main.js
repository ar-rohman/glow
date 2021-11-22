import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/styles/index.css';
import StringFormater from './plugins/StringFormater';
import DateFormater from './plugins/DateFormater';
import Converter from './plugins/Converter';
import Alert from './plugins/Alert';
import initIdb from './storage/initIdb';

initIdb.init();
Vue.use(StringFormater);
Vue.use(DateFormater);
Vue.use(Converter);
Vue.use(Alert);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
