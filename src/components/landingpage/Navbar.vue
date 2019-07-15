<template>
  <div>
    <nav class="landing">
      <div class="container">
        <div class="brand">
          <router-link to="/" tag="a">{{ salon.name }}</router-link>
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
            <a href="#products" v-smooth-scroll>Services</a>
          </li>
          <li>
            <a href="#contact" v-smooth-scroll>Contact</a>
          </li>
        </ul>
        <ul class="account">
          <router-link to="/login" tag="li" v-if="!isAuth">Login</router-link>
          <li v-if="isAuth && ($route.path === '/admin')" @click="$router.push('/landingpage')">View website</li>
          <li v-if="isAuth && ($route.path === '/admin')" @click="$router.push('/wizard')">Create Salon</li>
          <li v-if="isAuth && ($route.path === '/admin')" @click="logout">Logout</li>
        </ul>
        <div class="collapse" id="collapse" @click="sidebar = true">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
    <div class="sidebar" :class="sidebar ? 'open': ''" v-click-outside="closeSidebar">
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
            <a href="#products" v-smooth-scroll>Services</a>
          </li>
          <li>
            <a href="#contact" v-smooth-scroll>Contact</a>
          </li>
          <router-link to="/login" tag="li" v-if="!isAuth">Login</router-link>
          <li v-if="isAuth && ($route.path !== '/landingpage')" @click="$router.push('/landingpage')">View website</li>
           <li v-if="isAuth && ($route.path !== '/landingpage')" @click="$router.push('/wizard')">Create Salon</li>
          <li v-if="isAuth && ($route.path !== '/landingpage')" @click="logout">Logout</li>
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
    closeSidebar(){
      this.sidebar = false
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    },
    salon(){
      return this.$store.getters.salon
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

  .account {
    li {
      display: inline-block;
      margin: 0 10px;
      font-weight: 400;
      color: #999;
    }
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
