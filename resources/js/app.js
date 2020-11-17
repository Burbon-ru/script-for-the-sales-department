
import Vue from 'vue';

require('./bootstrap');



// Vue.config.devtools = true;
// Vue.config.performance = true;


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
