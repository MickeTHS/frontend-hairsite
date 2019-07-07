<template>
  <div class="hero landingpage-hero" id="home">
    <div class="container">
      <div class="box">
        <h1>
          <i class="material-icons edit" v-if="allowEdit">edit</i>
          {{ salon.frontend_opts.heading }}
        </h1>
        <p>
          <i class="material-icons edit" v-if="allowEdit">edit</i>
          {{ salon.frontend_opts.sub_heading }}
        </p>
        <router-link to="/book" tag="a" class="btn">Book Now</router-link>
      </div>
    </div>
    <div class="parallax"></div>
  </div>
</template>

<script>
export default {
  props: ["salon", "allowEdit"]
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
.hero {
  &.landingpage-hero {
    background: transparent;
  }
  .container {
    height: 100vh;
    max-height: 800px;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding-top: 54px;
    position: relative;
    z-index: 1;
    .box {
      background-color: rgba(0, 0, 0, 0.5);
      padding: 60px 40px;
      max-width: 720px;
      margin: 0 auto;

      h1 {
        color: #fff;
        font-size: 50px;
        position: relative;
      }

      p {
        color: #fff;
        line-height: 1.8;
        margin-top: 16px;
        position: relative;
      }

      .btn {
        font-size: 17px;
        font-weight: 700;
        display: block;
        width: 140px;
        margin: 20px auto 0;
        background-color: $theme1;
      }
    }
  }

  .parallax {
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: url(/img/hero.jpg);
    background-size: cover;
    z-index: 0;
  }
}
@media (max-width: 576px) {
  .hero {
    .container {
      padding: 0;
      .box {
        padding: 20px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1 {
          font-size: 40px;
        }
      }
    }
  }
}
</style>

