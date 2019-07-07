<template>
  <div>
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
        <ul class="account">
          <router-link to="/login" tag="li" v-if="!isAuth">Login</router-link>
          <li v-if="isAuth" @click="logout">Logout</li>
        </ul>
        <div class="collapse" id="collapse" @click="close">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
    <!-- <div class="sidebar" :class="sidebar ? 'open': ''" v-click-outside="this.sidebar = false"> -->
    <div class="sidebar" :class="sidebar ? 'open': ''">
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
          <router-link to="/login" tag="li" v-if="!isAuth">Login</router-link>
          <li v-if="isAuth" @click="logout">Logout</li>
      </ul>
    </div>
    <div class="overlay" v-if="sidebar"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      sidebar: false,
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    close(){
      this.sidebar = !this.sidebar
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

  li {
    cursor: pointer;
  }

  .collapse {
    span {
      background-color: $theme1;
    }
  }
}
</style>
