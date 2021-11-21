import Alert from './Alert.vue';
import { methods } from './util';

let installed = false;

export default {
    install(Vue) {
        if (installed) return;
        Vue.component('Alert', Alert);
        Vue.prototype.$alert = (data) => methods.alert(data);
        installed = true;
    },
};
