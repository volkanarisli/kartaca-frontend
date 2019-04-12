import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    NAME: '',
    EMAIL: ''
  },
  getters: {
    NAME: state => {
      return state.NAME
    },
    EMAIL: state => {
      return state.EMAIL
    }
  },
  mutations: {
    SET_NAME: (state, payload) => {
      state.NAME = payload
    },
    SET_NAME_EMPTY: (state) => {
      state.NAME = ''
    },
    SET_EMAIL: (state, payload) => {
      state.EMAIL = payload
    },
    SET_EMAIL_EMPTY: (state) => {
      state.EMAIL = ''
    },
  },
  actions: {
    SIGN_UP: async (context, form) => {
      let {data} = await axios.post('http://localhost:3000/users/register', {name: form.name, email: form.email, password: form.password, password2: form.password2})
      if (data.status === 200) {
        context.commit('SET_NAME', form.name)
        context.commit('SET_EMAIL', form.email)
        console.log("User succesfully registered.")
        return 200;
      }
      return 404;
    }
  },
});
