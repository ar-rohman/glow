import axios from 'axios';
import Database from '@/storage/storageIdb';

let installed = false;

export default {
    install(Vue) {
        if (installed) return;
        Vue.prototype.$axios = async (param) => {
            const objectStoreSetting = process.env.VUE_APP_OBJECT_STORE_SETTING;
            const getLanguage = (await Database.getData(objectStoreSetting, 'language')).value;
            const apiBaseUrl = process.env.VUE_APP_API_URL;
            const apiKey = process.env.VUE_APP_API_KEY;
            const url = `${apiBaseUrl}/${param}&appid=${apiKey}&units=metric&lang=${getLanguage}`;
            return axios(url);
        };
        installed = true;
    },
};
