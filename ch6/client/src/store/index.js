import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const work = {
    namespaced: true,
    state: {
        list: [
            { key: 1 },
        ],
        index: 1,
    },
    mutations: {
        add(state) {
            state.index += 1;
            state.list.push({ key: state.index });
        },
    },
    actions: {
        add({ commit }) {
            commit('add');
        },
    },
};

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        work,
    },
});
