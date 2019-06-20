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
  p {
    margin-bottom: 0;
  }
}
</style>

