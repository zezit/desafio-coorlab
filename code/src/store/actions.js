import axios from "axios";

export default {
    async fetchData({ commit }) {
        await axios
            .get(`${process.env.VUE_APP_ROOT_API}/transport`, {
            // .get(`https://json-server-vercel-ten-psi.vercel.app/transport`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                commit('SET_DATA', response.data);
            })
            .catch(error => {
                console.error(error);
            });
    },

    findOptions({ commit }, destine) {
        commit('SET_SELECTED_DESTINE', destine);
    },

    showErrorModal({ commit }, error) {
        commit('SET_ERROR_MODAL', error);
    },

    showLoading({ commit }) {
        commit('SET_LOADING_STATE', true);
    },

    hideLoading({ commit }) {
        commit('SET_LOADING_STATE', false);
    },

    clearAll({ commit }) {
        commit('CLEAR_ALL');
    }
}