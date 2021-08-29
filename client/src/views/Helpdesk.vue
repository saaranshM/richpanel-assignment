<template>
  <section class="helpdesk">
    <sidebar />
    <conversations />
    <message-box />
  </section>
</template>

<script>
import Conversations from "../components/conversations/Conversations.vue";
import MessageBox from "../components/message-box/MessageBox.vue";
import Sidebar from "../components/sidebar/Sidebar.vue";
export default {
  components: { Sidebar, Conversations, MessageBox },
};
</script>

<style lang="scss" scoped></style>
