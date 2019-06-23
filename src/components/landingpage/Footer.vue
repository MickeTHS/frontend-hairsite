<template>
  <footer>
    <div class="container">
      <p>© {{ new Date().getFullYear() }} {{ salon.name }} All Rights Reserved</p>
      <p>
        <a :href="network.url" v-for="(network, index) in salon.social" :key="index" target="_blank">
          <i :class="`fab fa-${network.code}`"></i>
        </a>
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  props: ['salon']
}
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
    p {
      color: #fff;
      font-size: 14px;
      margin-bottom: 0;
      font-weight: 300;
    }
    i {
      color: #fff;
      margin: 0 10px;
    }
  }
}
@media (max-width: 600px) {
  footer {
    .container {
      display: block;
      text-align: center;
      p:first-child {
        margin-bottom: 16px;
      }
    }
  }
}
</style>

