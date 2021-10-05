import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import location from './location';
import weather from './weather';
import favorite from './favorite';
import alert from './alert';

Vue.use(Vuex);

export default new Vuex.Store({
    plugins: [createPersistedState()],
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
        weather,
        favorite,
        alert,
    },
});
