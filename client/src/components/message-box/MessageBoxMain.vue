<template>
  <main class="msgbox_main">
    <div class="msgbox_main-container">
      <div class="msgbox_main-conversation">
        <div class="msg-row msg-other">
          <div class="msg-content">
            <img :src="require('../../assets/img/profile.png')" alt="" />

            <div class="msg_text-content">
              <div class="msg-text">
                How good is the product?
              </div>
              <div class="msg-created">
                Amit RG | Apr 25
              </div>
            </div>
          </div>
        </div>
        <div class="msg-row msg-you">
          <div class="msg-content">
            <img :src="require('../../assets/img/profile.png')" alt="" />

            <div class="msg_text-content">
              <div class="msg-text">
                It is very durable!
              </div>
              <div class="msg-created">
                Admin | Apr 25
              </div>
            </div>
          </div>
        </div>
        <div class="msg-row msg-other">
          <div class="msg-content">
            <img :src="require('../../assets/img/profile.png')" alt="" />

            <div class="msg_text-content">
              <div class="msg-text">
                How much is the cost?
              </div>
              <div class="msg-created">
                Amit RG | Apr 25
              </div>
            </div>
          </div>
        </div>
        <div class="msg-row msg-you">
          <div class="msg-content">
            <img :src="require('../../assets/img/profile.png')" alt="" />

            <div class="msg_text-content">
              <div class="msg-text">
                Its Rs.2500
              </div>
              <div class="msg-created">
                Admin | Apr 25
              </div>
            </div>
          </div>
        </div>
        <div class="msg-row msg-other">
          <div class="msg-content">
            <img :src="require('../../assets/img/profile.png')" alt="" />

            <div class="msg_text-content">
              <div class="msg-text">
                Delivery?
              </div>
              <div class="msg-created">
                Amit RG | Apr 25
              </div>
            </div>
          </div>
        </div>
        <div class="msg-row msg-you">
          <div class="msg-content">
            <img :src="require('../../assets/img/profile.png')" alt="" />

            <div class="msg_text-content">
              <div class="msg-text">
                Within 2 days.
              </div>
              <div class="msg-created">
                Admin | Apr 25
              </div>
            </div>
          </div>
        </div>
      </div>
      <input
        placeholder="Enter Message"
        type="text"
        class="msgbox_main-input"
      />
    </div>
  </main>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
