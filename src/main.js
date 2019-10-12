import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router.js';

axios.defaults.withCredentials=true;
// Vue.prototype.$axios = axios;
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
