import axios from 'axios'

export default {
    
    async fetchStarships({ commit }, page = 1) {
        await axios.get(`https://swapi.dev/api/starships?page?${ page }`).then(response => {
            let { next, results } = response?.data
            commit('setStarships', results)
            commit('setNext', next)
        });
    }
};
