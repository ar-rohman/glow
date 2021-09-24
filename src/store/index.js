import Vue from 'vue';
import Vuex from 'vuex';
import location from './location';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        city: null,
        timestamp: null,
    },
    mutations: {
        setCity: (state, value) => {
            state.city = value;
        },
        setDate: (state, value) => {
            state.timestamp = value;
        },
    },
    actions: {
        setCity: ({ commit }, value) => {
            commit('setCity', value);
        },
        setDate: ({ commit }, value) => {
            commit('setDate', value);
        },
    },
    getters: {
        city: (state) => state.city,
        timestamp: (state) => state.timestamp,
    },
    modules: {
        location,
    },
});
