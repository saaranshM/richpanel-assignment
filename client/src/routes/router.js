import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login";
import Home from "../views/Home";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from) {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: "/",
      redirect: "/login",
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
  ],
});

export default router;
