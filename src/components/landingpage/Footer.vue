<template>
  <footer>
    <div class="container">
      <p>&copy; {{ new Date().getFullYear() }} {{ salon.name }} All Rights Reserved</p>
      <p class="social">
        <a
          :href="network.url"
          v-for="(network, index) in salon.social"
          :key="index"
          target="_blank"
        >
          <img :src="`/img/social/${network.name}.svg`" :alt="network.name" />
        </a>
        <i class="material-icons edit" v-if="allowEdit" :style="{background: salon.frontend_opts.theme.primary}" @click="$emit('updateSocialLinks')">edit</i>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['salon', 'allowEdit']
};
</script>

<style lang="scss">
footer {
  background-color: #222;
  padding: 15px 0;
  position: relative;
  z-index: 1;
  .container {
    display: flex;
    justify-content: space-between;
    max-width: 1440px !important;
    p {
      color: #fff;
      font-size: 14px;
      margin-bottom: 0;
      font-weight: 300;
    }
    .social {
      position: relative;
      img {
        width: 20px;
        margin: 0 6px;
      }
      .edit {
        top: -6px;
        right: -30px;
      }
    }
  }
}
@media (max-width: 600px) {
  footer {
    .container {
      display: block;
      text-align: center;
      p:first-of-type {
        margin-bottom: 16px;
      }
    }
  }
}
</style>

