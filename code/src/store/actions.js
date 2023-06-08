import axios from "axios";

export const fetchData = ({ commit }) => {
    axios
        .get(`${process.env.VUE_APP_ROOT_API}/transport`, {
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
}