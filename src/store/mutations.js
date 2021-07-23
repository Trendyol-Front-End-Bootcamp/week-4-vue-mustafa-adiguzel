export default {
    setStarships(state, payload) {
        state.starships = payload;
    },
    setNext(state, payload) {
        state.next = payload;
    },
    setDetail(state, payload) {
        state.detail = payload;
    }
};
