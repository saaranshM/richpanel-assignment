<template>
  <section class="home">
    <div>
      <h1 class="home_welcome">Welcome!</h1>
      <h2 class="home_hey">
        Hey there {{ user.firstName }} we are getting things ready for you....
      </h2>
      <lottie-vue-player
        :src="`https://assets2.lottiefiles.com/packages/lf20_tilm0top.json`"
        :theme="options.theme"
        :player-size="options.playerSize"
        class="home_loading"
      />
      <lottie-vue-player
        :src="`https://assets5.lottiefiles.com/packages/lf20_bBEnuW.json`"
        :theme="options.theme"
        :player-size="options.playerSize"
        class="home_loading"
      />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userData: null,
      options: {
        minimizable: false,
        playerSize: "standard",
        backgroundColor: "#fff",
        backgroundStyle: "color",
        theme: {
          controlsView: "hide",
          active: "light",
          light: {
            color: "#e6f1ff",
            backgroundColor: "#fff",
            opacity: "0.7",
          },
          dark: {
            color: "#fff",
            backgroundColor: "#e6f1ff",
            opacity: "0.7",
          },
        },
      },
    };
  },
  async mounted() {
    if (!this.user) {
      this.$store.dispatch("setUserFromStorage");
    }
    setTimeout(() => {
      this.$router.push("/helpdesk");
    }, 2000);
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style lang="scss" scoped></style>
