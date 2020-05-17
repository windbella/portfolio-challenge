import axios from 'axios';

const work = {
    namespaced: true,
    state: {
        status: 'INIT',
        list: [],
    },
    mutations: {
        setStatus(state, payload) {
            state.status = payload.status;
        },
        setList(state, payload) {
            state.list = payload.list;
        },
    },
    actions: {
        async load({ commit }) {
            commit('setStatus', { status: 'WAITING' });
            try {
                const response = await axios.get('/api/v1/works');
                commit('setList', { list: response.data });
                commit('setStatus', { status: 'SUCCESS' });
            } catch (e) {
                commit('setStatus', { status: 'FAILURE' });
            }
        },
    },
};

export default work;
