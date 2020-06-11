import Vue from 'vue';
import Vuex from 'vuex';
import home from './home';
import work from './work';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        home,
        work,
    },
});
