<template>
  <nav class="landing">
    <div class="container">
      <div class="brand">
        <router-link to="/" tag="a">TechPalace</router-link>
      </div>
      <ul class="top-menu">
        <li><a href="#home" v-smooth-scroll>Home</a></li>
        <li><a href="#about" v-smooth-scroll>About</a></li>
        <li><a href="#gallery" v-smooth-scroll>Gallery</a></li>
        <li><a href="#staff" v-smooth-scroll>Staff</a></li>
        <li><a href="#pricing" v-smooth-scroll>Pricing</a></li>
        <li><a href="#contact" v-smooth-scroll>Contact</a></li>
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
    logout(){
      this.$store.dispatch('logout')
    }
  },
  computed: {
    isAuth(){
      return this.$store.getters.isAuth
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
nav.landing {
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 54px;
  }

  .brand {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 600;
    color: $theme1;
    cursor: pointer;
    a {
      font-size: inherit;
      color: inherit;
    }
  }

  ul {
    li {
      display: inline-block;
      margin: 18px 10px;
      color: #999;
      font-weight: 400;
      cursor: pointer;
      &.active {
        color: $theme1;
      }
    }
  }

  .collapse {
    display: none;
    position: relative;
    width: 20px;
    height: 14px;
    cursor: pointer;

    span {
      height: 2px;
      width: 20px;
      position: absolute;
      left: 0;
      background-color: $theme1;

      &:first-child {
        top: 0;
      }

      &:nth-child(2),
      &:nth-child(3) {
        top: 6px;
      }

      &:last-child {
        top: 12px;
      }
    }
  }
}

@media (max-width: 768px) {
  nav {
    .top-menu,
    .btn {
      display: none;
    }

    .collapse {
      display: block;
    }
  }
}
</style>
