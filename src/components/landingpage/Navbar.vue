<template>
  <nav class="landing">
    <div class="container">
      <div class="brand">
        <router-link to="/" tag="a">TechPalace</router-link>
      </div>
      <ul class="top-menu">
        <li>
          <a href="#home" v-smooth-scroll>Home</a>
        </li>
        <li>
          <a href="#about" v-smooth-scroll>About</a>
        </li>
        <li>
          <a href="#gallery" v-smooth-scroll>Gallery</a>
        </li>
        <li>
          <a href="#staff" v-smooth-scroll>Staff</a>
        </li>
        <li>
          <a href="#pricing" v-smooth-scroll>Pricing</a>
        </li>
        <li>
          <a href="#contact" v-smooth-scroll>Contact</a>
        </li>
      </ul>
      <ul>
        <router-link to="/login" tag="li" v-if="!isAuth">Login</router-link>
        <li v-if="isAuth" @click="logout">Logout</li>
      </ul>
      <div class="collapse">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("logout");
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
nav.landing {
  .brand {
    color: $theme1;
  }

  ul {
    li {
      &.active {
        color: $theme1;
      }
    }
  }

  .collapse {
    span {
      background-color: $theme1;
    }
  }
}
</style>
