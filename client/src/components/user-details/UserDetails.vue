<template>
  <section class="user-details">
    <user-profile />
    <customer-details />
  </section>
</template>

<script>
import CustomerDetails from "./CustomerDetails.vue";
import UserProfile from "./UserProfile.vue";
export default {
  components: { UserProfile, CustomerDetails },
};
</script>

<style
  lang="
    CustomerDetailsscss"
  scoped
></style>
