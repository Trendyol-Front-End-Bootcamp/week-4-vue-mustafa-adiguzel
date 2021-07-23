import axios from 'axios'

export default {
    
    async fetchStarships({ commit }, page = 1) {
        await axios.get(`https://swapi.dev/api/starships/?page=${ page }`).then(response => {
            let { next, results } = response?.data
            commit('setStarships', results)
            commit('setNext', next)
        });
    },
    async searchStarships({ commit }, query) {
        await axios.get(`https://swapi.dev/api/starships/?search=${ query }`).then(response => {
            let { next, results } = response?.data
            commit('setStarships', results)
            commit('setNext', next)
        });
    },
    async fetchDetail({ commit }, starShipId) {
        await axios.get(`https://swapi.dev/api/starships/${ starShipId }`).then(response => {
            commit('setDetail', response.data)
        });
    }
};
