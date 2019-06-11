<template>
  <nav class="landing">
    <div class="container">
      <div class="brand">
        <router-link to="/" tag="a">TechPalace</router-link>
      </div>
      <ul class="top-menu">
        <router-link to="/" tag="li">Home</router-link>
        <router-link to="/about" tag="li">About</router-link>
        <router-link to="/gallery" tag="li">Gallery</router-link>
        <router-link to="/staff" tag="li">Staff</router-link>
        <router-link to="/pricing" tag="li">Pricing</router-link>
        <router-link to="/contact" tag="li">Contact</router-link>
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
<style lang="scss">
@import "@/assets/scss/_variables.scss";
nav.landing {
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;

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
    font-family: "Playfair Display";
    font-size: 20px;
    font-weight: 600;
    color: $theme1;
    cursor: pointer;
    a {
      font-size: inherit;
      color: inherit;
    }
  }

  .top-menu {
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
