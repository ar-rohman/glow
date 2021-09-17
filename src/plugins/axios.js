import Vue from 'vue';
import axios from 'axios';

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
    baseURL: process.env.VUE_APP_API_URL,
    // baseURL: process.env.baseURL || process.env.apiUrl || ""
    // timeout: 60 * 1000, // Timeout
    // withCredentials: true, // Check cross-site Access-Control
};

const ax = axios.create(config);

ax.interceptors.request.use(
    (configuration) => configuration,
    // Do something before request is sent
    (error) => Promise.reject(error),
    // Do something with request error
);

// Add a response interceptor
ax.interceptors.response.use(
    (response) => response,
    // Do something with response data
    (error) => Promise.reject(error),
    // Do something with response error
);

Plugin.install = () => {
    Vue.axios = ax;
    window.axios = ax;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return ax;
            },
        },
        $axios: {
            get() {
                return ax;
            },
        },
    });
};

Vue.use(Plugin);

export default Plugin;
