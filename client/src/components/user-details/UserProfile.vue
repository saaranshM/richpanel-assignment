<template>
  <div class="user-profile">
    <img
      class="user-profile_image"
      :src="require('../../assets/img/profile.png')"
      alt=""
    />
    <div class="user-profile_name">
      Amit RG
    </div>
    <div class="user-profile_buttons">
      <button>
        <svg-icon class="user-profile_button-icon" name="call" />Call
      </button>
      <button>
        <svg-icon class="user-profile_button-icon" name="profile" />Proflie
      </button>
    </div>
  </div>
</template>

<script>
import SvgIcon from "../common/SvgIcon.vue";
export default {
  components: { SvgIcon },
};
</script>

<style lang="scss" scoped></style>
