import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const work = {
    namespaced: true,
    state: {
        list: [
            { key: 1 },
        ],
    },
    mutations: {
        add(state) {
            state.list.push({ key: Math.ceil(Math.random() * 10) });
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
