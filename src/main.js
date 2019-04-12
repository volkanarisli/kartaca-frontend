import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import socketIO from 'vue-socket.io'

// app.js
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
Vue.use(require('vue-moment'));

Vue.component('Header', require('./components/Header.vue'));

// app.js
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import Vuetify from 'vuetify'
Vue.use(Vuetify);

Vue.config.productionTip = false;

Vue.use(new socketIO({
  debug: true,
  connection: 'http://localhost:3000',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
}))

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
