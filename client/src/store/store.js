import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const url = "http://localhost:3000";

const store = new Vuex.Store({
  state: {
    user: null,
    fbResponse: null,
  },
  getters: {
    user: (state) => {
      return state.user;
    },
  },
  mutations: {
    SET_USER_DATA: (state, user) => {
      state.user = user;
    },
    SET_FB_RESPONSE: (state, res) => {
      state.fbResponse = res;
    },
  },
  actions: {
    async getUserData({ commit }) {
      let fbResponse = localStorage.getItem("fbResponse");
      if (fbResponse) {
        fbResponse = JSON.parse(fbResponse);
        commit("SET_FB_RESPONSE", fbResponse);
      }
      const userData = await axios.post(url + "/user/details", {
        data: fbResponse,
      });
      commit("SET_USER_DATA", userData.data);
    },
  },
});

export default store;
