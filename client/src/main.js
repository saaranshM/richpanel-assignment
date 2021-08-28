import Vue from "vue";
import App from "./App.vue";
import Axios from "axios";
import router from "./routes/router";

Vue.prototype.$axios = Axios;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
