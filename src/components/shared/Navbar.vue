<template>
  <nav v-if="this.$route.path !== '/wizard'">
    <div class="container">
      <div class="brand">
        <router-link to="/" tag="a">HairPlace</router-link>
      </div>
      <ul class="top-menu">
        <router-link to="/" tag="li">Home</router-link>
        <router-link to="/about" tag="li">About</router-link>
        <router-link to="/services" tag="li">Services</router-link>
        <router-link to="/contact" tag="li">Contact</router-link>
      </ul>
      <router-link to="/login" tag="a" class="btn">Sign In</router-link>
      <div class="collapse">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>
<style lang="scss">
@import "@/assets/scss/_variables.scss";
nav {
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 99;
  box-shadow: 0 5px 16px rgba(101, 101, 101, 0.04);

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 54px;
    padding-top: 0;
    padding-bottom: 0;
    max-width: 1440px !important;
  }

  .brand {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 500;
    color: $primaryColor;
    cursor: pointer;
    a {
      font-size: inherit;
      color: inherit;
      font-weight: inherit;
    }
  }

  .top-menu {
    li {
      display: inline-block;
      margin: 18px 10px;
      color: #999;
      font-weight: 400;
      cursor: pointer;
      a {
        color: inherit;
      }
    }
  }

  .btn {
    background-color: #fff;
    border: 1px solid #42afde;
    color: #42afde;
    font-weight: normal;
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
      background-color: $primaryColor;

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

.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 0;
  max-width: 100%;
  z-index: 1001;
  overflow: hidden;
  background: #fff ;
  padding: 30px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  transition: width 0.5s;
  &.open {
    width: 280px;
  }
  ul {
    padding-left: 0;
    li {
      padding: 12px 32px;
      transition: all 0.2s ease-in-out;
      white-space: nowrap;
      cursor: pointer;
      &:hover,
      &:focus,
      &.active {
        background: $theme1;
        color: #fff;
      }
      img {
        vertical-align: middle;
        margin-right: 10px;
      }
      a {
        color: inherit
      }
    }
  }
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
}

@media (max-width: 1024px) {
  nav {
    .top-menu,
    .account,
    .btn {
      display: none;
    }

    .collapse {
      display: block !important;
    }
  }
}
</style>
