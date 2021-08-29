<template>
  <main class="convo_main">
    <conversation-card />
    <conversation-card />
    <conversation-card />
  </main>
</template>

<script>
import ConversationCard from "./ConversationCard.vue";
export default {
  components: { ConversationCard },
};
</script>

<style lang="scss" scoped></style>
