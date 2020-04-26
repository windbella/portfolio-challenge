import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const work = {
    namespaced: true,
    state: {
        list: [
            { key: 1 },
            { key: 2 },
            { key: 3 },
            { key: 4 },
            { key: 5 },
        ],
    },
    mutations: {
    },
    actions: {
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
