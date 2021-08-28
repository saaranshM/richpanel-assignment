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
import axios from "axios";
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
    console.log(process.env.SERVER_URL);
  },

  methods: {
    loginWithFacebook() {
      window.FB.login(
        async (response) => {
          console.log("fb response", response.authResponse);
          try {
            const res = await axios({
              method: "post",
              url: "http://localhost:3000/user/details",
              data: response.authResponse,
            });
            console.log(res);
          } catch (error) {
            console.log(error);
          }
        },
        {
          scope:
            "pages_messaging,pages_read_user_content,pages_read_engagement ,email",
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
