
import Vue from 'vue';

//import Element from 'element-ui';
//Vue.use(Element);

require('./bootstrap');

import App from './App.vue';
import router from './router';
import store from './store';

const app = new Vue({
    el: '#app',
    router,
    store,
    components: {
        App
    },
    render: h => h(App)
});
