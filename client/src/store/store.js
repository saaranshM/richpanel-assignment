import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

const url = "http://localhost:3000";

const store = new Vuex.Store({
  state: {
    user: null,
    conversations: null,
    fbResponse: null,
    conversationInView: null,
  },
  getters: {
    user: (state) => {
      return state.user;
    },
    conversations: (state) => {
      return state.conversations;
    },
    conversationInView: (state) => {
      return state.conversationInView;
    },
  },
  mutations: {
    SET_USER_DATA: (state, user) => {
      state.user = user;
    },
    SET_FB_RESPONSE: (state, res) => {
      state.fbResponse = res;
    },
    SET_CONVERSATIONS: (state, res) => {
      state.conversations = res;
    },
    SET_CONVERSATION_INVIEW: (state, res) => {
      state.conversationInView = res;
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
    async getConversations({ commit, state }) {
      try {
        const coversations = await axios.get(url + "/user/conversations");
        commit("SET_CONVERSATIONS", coversations.data);
        commit("SET_CONVERSATION_INVIEW", coversations.data.convos[0]);
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export default store;
