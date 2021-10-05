export default {
    namespaced: true,
    state: {
        type: null,
        message: null,
        showAlert: false,
    },
    mutations: {
        set: (state, value) => {
            state.type = value.type;
            state.message = value.message;
            state.showAlert = value.showAlert;
        },
    },
    actions: {
        set: ({ commit }, value) => {
            commit('set', value);
            setTimeout(() => {
                commit('set', {
                    type: 'success',
                    message: null,
                    showAlert: false,
                });
            }, 2000);
        },
    },
    getters: {
        type: (state) => state.type,
        message: (state) => state.message,
        showAlert: (state) => state.showAlert,
    },
};
