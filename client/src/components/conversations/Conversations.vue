<template>
  <section class="convo">
    <div class="convo_header">
      <div class="convo_header-content">
        <svg-icon name="list" class="convo_header-icon" />
        <h2 class="convo_header-heading">Conversations</h2>
      </div>
      <svg-icon name="refresh" class="convo_header-refresh" />
    </div>
    <converstions-main />
  </section>
</template>

<script>
import SvgIcon from "../common/SvgIcon.vue";
import ConverstionsMain from "./ConverstionsMain.vue";
export default {
  name: "Conversations",
  components: { SvgIcon, ConverstionsMain },
};
</script>

<style lang="scss" scoped></style>
