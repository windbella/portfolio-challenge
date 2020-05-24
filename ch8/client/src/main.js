import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import './main.css';

Vue.config.productionTip = false;

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount('#app');

store.dispatch('work/load');
