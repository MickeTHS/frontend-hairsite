<template>
  <div class="hero" id="home">
    <div class="container">
      <div class="box">
        <h1>Welcome to {{ salon.name }} Salon</h1>
        <p>
          A unique hairdressing salon &amp; barber TechPalace Salon. With us, we have the most sought after, experienced hairdressers and barbers. We focus on the latest in color, hair care and beard care.
          Our vision is to always make you as a customer satisfied after your visit.
        </p>
        <router-link to="/book" tag="a" class="btn">Book Now</router-link>
      </div>
    </div>
    <div class="parallax"></div>
  </div>
</template>

<script>
export default {
  props: ['salon']
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
.hero {
  background: transparent;
  .container {
    height: 100vh;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding-top: 54px;

    .box {
      background-color: rgba(0, 0, 0, 0.5);
      padding: 60px 40px;
      max-width: 720px;
      margin: 0 auto;

      p {
        color: #fff;
        line-height: 1.8;
        margin-top: 16px;
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
  }

  h1 {
    color: #fff;
    font-size: 50px;
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

