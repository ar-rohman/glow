import axios from 'axios';

let installed = false;

export default {
    install(Vue) {
        if (installed) return;
        Vue.prototype.$axios = (param) => {
            const apiBaseUrl = process.env.VUE_APP_API_URL;
            const apiKey = process.env.VUE_APP_API_KEY;
            const url = `${apiBaseUrl}/${param}&appid=${apiKey}&units=metric`;
            return axios(url);
        };
        installed = true;
    },
};
