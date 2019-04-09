import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// app.js
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);

Vue.component('Header', require('./components/Header.vue'));

// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
