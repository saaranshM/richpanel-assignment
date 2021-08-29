<template>
  <header class="sidebar">
    <div>
      <img
        class="sidebar_logo"
        :src="require('../../assets/img/logo.png')"
        alt="Logo"
      />
    </div>
    <nav class="sidebar_nav">
      <ul class="sidebar_nav-list">
        <li class="sidebar_nav-list-item">
          <svg-icon class="sidebar_nav-list-icon" name="messages" />
        </li>
        <li class="sidebar_nav-list-item">
          <svg-icon class="sidebar_nav-list-icon-dummy" name="people" />
        </li>
        <li class="sidebar_nav-list-item">
          <svg-icon class="sidebar_nav-list-icon-dummy" name="money" />
        </li>
      </ul>
    </nav>
    <div class="sidebar_profile">
      <img
        class="sidebar_profile-image"
        :src="require('../../assets/img/profile.png')"
        alt="Profile"
      />
    </div>
  </header>
</template>

<script>
import SvgIcon from "../common/SvgIcon.vue";
export default {
  name: "Sidebar",
  components: { SvgIcon },
};
</script>

<style lang="scss" scoped></style>
