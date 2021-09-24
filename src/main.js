import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import './assets/styles/index.css';
import StringFormater from './plugins/StringFormater';
import DateFormater from './plugins/DateFormater';
import Converter from './plugins/Converter';

Vue.use(StringFormater);
Vue.use(DateFormater);
Vue.use(Converter);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');
