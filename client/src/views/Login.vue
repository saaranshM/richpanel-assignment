<template>
  <section class="login-container">
    <div class="login">
      <div class="login_form" action="submit">
        <h2 class="login_form-title">Lets get started!</h2>
        <button @click="loginWithFacebook" class="login_form-button">
          <svg-icon class="login-icon" name="facebook"></svg-icon>
          Login
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import SvgIcon from "../components/common/SvgIcon.vue";
import { initFbsdk } from "../utils/fbInit";
export default {
  components: { SvgIcon },
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },

  mounted() {
    initFbsdk();
  },

  methods: {
    loginWithFacebook() {
      window.FB.login((response) => {
        console.log("fb response", response);
      }, this.params);
    },
  },
};
</script>

<style lang="scss" scoped></style>
