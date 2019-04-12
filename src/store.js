import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    NAME: '',
    EMAIL: '',
    chats: null,
    handle: ""
  },
  getters: {
    NAME: state => {
      return state.NAME
    },
    EMAIL: state => {
      return state.EMAIL
    },
    CHATS: state => {
      return state.chats
    },
    HANDLE: state => {
      return state.handle
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
    SET_CHAT: (state, payload) => {
      state.chats = payload;
    },
    ADD_CHAT: (state, payload) => {
      state.chats.push(payload);
    },
    SET_HANDLE: (state, payload) => {
      state.handle = payload;
    }
  },
  actions: {
    SIGN_UP: async (mutations, form) => {
      let {data} = await axios.post('http://localhost:3000/users/register', {
        name: form.name,
        email: form.email,
        password: form.password,
        password2: form.password2
      })
      if (data.status === 200) {
        mutations.commit('SET_NAME', form.name)
        mutations.commit('SET_EMAIL', form.email)
        console.log("User succesfully registered.")
        return 200;
      }
      return 404;
    },
    SIGN_IN: async (mutations, form) => {
      let {data} = await axios.post('http://localhost:3000/users/login', {email: form.email, password: form.password})
      if (data.status === 200) {
        mutations.commit('SET_NAME', data.name)
        mutations.commit('SET_EMAIL', data.email)
        console.log("User succesfully registered.")
        return 200;
      }
      return 400;
    },
    SET_CHAT: async (context, payload) => {
      let {data} = await axios.get('http://localhost:3000/chat');
      console.log(data);
      context.commit("SET_CHAT", data);
    },
    ADD_CHAT: (context, payload) => {
      context.commit("ADD_CHAT", payload);
    },
    SET_HANDLE: (context, payload) => {
      context.commit("SET_HANDLE", payload);
    }
  },
});
