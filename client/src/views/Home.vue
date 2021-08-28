<template>
  <div>
    Home
    <h2>{{ user.first_name }}</h2>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: null,
    };
  },
  async mounted() {
    await this.$store.dispatch("getUserData");
    console.log(this.user);
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>

<style lang="scss" scoped></style>
