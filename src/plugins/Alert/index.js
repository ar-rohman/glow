import VTNotification from './VTNotification.vue';
import VTNotificationGroup from './VTNotificationGroup.vue';
import alert from './Alert.vue';
import { methods } from './notifications';

let installed = false;

const Alert = {
    install(Vue) {
        if (installed) return;
        Vue.component('notification', VTNotification);
        Vue.component('notificationGroup', VTNotificationGroup);
        Vue.component('Alert', alert);
        Vue.prototype.$alert = (data) => methods.alert(data);
        installed = true;
    },
};

export default Alert;
