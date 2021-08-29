<template>
  <section class="helpdesk">
    <sidebar />
    <conversations />
    <message-box />
    <user-details />
  </section>
</template>

<script>
import Conversations from "../components/conversations/Conversations.vue";
import MessageBox from "../components/message-box/MessageBox.vue";
import Sidebar from "../components/sidebar/Sidebar.vue";
import UserDetails from "../components/user-details/UserDetails.vue";
export default {
  components: { Sidebar, Conversations, MessageBox, UserDetails },
};
</script>

<style lang="scss" scoped></style>
