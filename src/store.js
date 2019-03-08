import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

    state: {
        isAuthenticated: false
    },

    getters: {
        isAuthenticated(state) {
            return true; //state.isAuthenticated
        }
    },
    mutations: {
        authenticate(state) {
            state.isAuthenticated =true;
        },
        logout(state){
            state.isAuthenticated=false;
        }
    },
    actions: {
        login (context) {
            context.commit('authenticate');
        },
        logout(context){
            context.commit('logout');
        }
    }
});
