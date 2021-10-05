export default {
    namespaced: true,
    state: {
        favorite: [],
    },
    mutations: {
        add: (state, payload) => {
            state.favorite.push(payload);
        },
        remove: (state, payload) => {
            const item = state.favorite.indexOf(payload);
            state.favorite.splice(item, 1);
        },
    },
    actions: {
        addFavorite: ({ state, commit }, payload) => {
            if (state.favorite.indexOf(payload) === -1) {
                commit('add', payload);
            }
        },
        removeFavorite: ({ state, commit }, payload) => {
            if (state.favorite.indexOf(payload) !== -1) {
                commit('remove', payload);
            }
        },
    },
    getters: {
        favorite: (state) => state.favorite,
    },
};
