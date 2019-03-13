import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    isAuthenticated: !!localStorage.getItem('token'),
    user: JSON.parse(localStorage.getItem('user')),
    theme: localStorage.getItem('theme') || 'light',
    sidebar: localStorage.getItem('sidebar') || 'full',
  },

  getters: {
    isAuthenticated(state) {
      return state.isAuthenticated
    },

    user(state) {
      if (!state.isAuthenticated) {
        return null;
      }

      return state.user;
    },

    theme(state) {
      return state.theme;
    },

    sidebar(state) {
      return state.sidebar;
    }
  },

  mutations: {
    authenticate(state, payload) {
      state.isAuthenticated = true;

      localStorage.setItem('token', payload.api_token);

      state.user = {
        id: payload.id,
        first_name: payload.first_name,
        last_name: payload.last_name,
        email: payload.email,
        avatar: payload.avatar
      };

      localStorage.setItem('user', JSON.stringify(state.user))
    },

    theme(state, payload) {
      state.theme = payload

      localStorage.setItem('theme', payload)
    },

    sidebar(state, payload) {
      state.sidebar = payload;

      localStorage.setItem('sidebar', payload)
    },

    logout(state) {
      state.isAuthenticated = false;
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    },
  },

  actions: {
    login(context, payload) {
      context.commit('authenticate', payload);
    },

    setTheme(context, payload) {
      context.commit('theme', payload);
    },

    setSidebar(context, payload) {
      context.commit('sidebar', payload);
    },

    logout(context) {
      context.commit('logout');
    }
  }
});
