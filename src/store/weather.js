export default {
    namespaced: true,
    state: {
        hourly: [],
        daily: [],
    },
    mutations: {
        setHourly: (state, value) => {
            state.hourly = value;
        },
        setDaily: (state, value) => {
            state.daily = value;
        },
    },
    actions: {
        setHourly: ({ commit }, value) => {
            commit('setHourly', value);
        },
        setDaily: ({ commit }, value) => {
            commit('setDaily', value);
        },
    },
    getters: {
        hourly: (state) => state.hourly,
        daily: (state) => state.daily,
    },
};
