export default {
    namespaced: true,
    state: {
        lat: null,
        lon: null,
    },
    mutations: {
        set: (state, value) => {
            state.lat = value.lat;
            state.lon = value.lon;
        },
    },
    actions: {
        set: ({ commit }, value) => {
            commit('set', value);
        },
    },
    getters: {
        lat: (state) => state.lat,
        lon: (state) => state.lon,
    },
};
