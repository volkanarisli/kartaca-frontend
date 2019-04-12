import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Latin from './views/LatinToMorse.vue';
import Morse from './views/MorseToLatin.vue';
import Register from './views/Register.vue';
import Login from './views/Login.vue';
import Chat from './views/Chat.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/ltom',
      name: 'latin-to-morse',
      component: Latin,
    },
    {
      path: '/mtol',
      name: 'morse-to-latin',
      component: Morse,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat,
    },
  ],
});
