import Vue from 'vue';
import App from './App.vue';
import './components/utilities/Utilities.js';
import VueRouter from 'vue-router';
import router from './routes.js';





new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
