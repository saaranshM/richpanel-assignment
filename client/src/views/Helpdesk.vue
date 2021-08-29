<template>
  <section class="helpdesk">
    <sidebar />
    <conversations />
  </section>
</template>

<script>
import Conversations from "../components/conversations/Conversations.vue";
import Sidebar from "../components/sidebar/Sidebar.vue";
export default {
  components: { Sidebar, Conversations },
};
</script>

<style lang="scss" scoped></style>
