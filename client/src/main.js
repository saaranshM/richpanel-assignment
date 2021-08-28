import Vue from "vue";
import App from "./App.vue";
import Axios from "axios";
import router from "./routes/router";
import store from "./store/store";

Vue.prototype.$axios = Axios;

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
