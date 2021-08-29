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
    async getUserData({ commit, state }, fbResponse) {
      let user = localStorage.getItem("user");
      if (user) {
        commit("SET_USER_DATA", JSON.parse(user));
        return;
      }
      const userData = await axios.post(url + "/user/login", {
        data: fbResponse,
      });

      localStorage.setItem("user", JSON.stringify(userData.data));
      commit("SET_USER_DATA", userData.data);
    },
    setUserFromStorage({ commit, state }) {
      let user = JSON.parse(localStorage.getItem("user"));
      commit("SET_USER_DATA", user);
    },
  },
});

export default store;
