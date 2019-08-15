
<template>
  <div class="hero">
    <div class="container">
      <div class="box">
        <h1>The Best Place Where You Take Your Hair Business to the Next Level</h1>
        <router-link to="/signup" tag="a" class="btn">Get Started</router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.hero {
  background: url(/img/hero.jpg);
  background-size: cover;

  .container {
    height: 100vh;
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding-top: 54px !important;

    .box {
      background-color: rgba(0, 0, 0, 0.5);
      padding: 60px 40px;
      max-width: 720px;
      margin: 0 auto;

      .btn {
        font-size: 14px;
        font-weight: 700;
        display: inline-block;
        min-width: 140px;
        margin: 20px auto 0;
        background-color: #bfd354;
        white-space: nowrap;
      }
    }
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

