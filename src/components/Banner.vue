<template>
  <div class="hero">
    <div class="container">
      <div class="box">
        <h1>The Best Place Where You Take Your Hair Business to the Next Level</h1>
        <a class="btn" href="./signup.html">Get Started</a>
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
    padding-top: 54px;

    .box {
      background-color: rgba(0, 0, 0, 0.5);
      padding: 60px 40px;
      max-width: 720px;
      margin: 0 auto;

      .btn {
        font-size: 17px;
        font-weight: 700;
        display: block;
        width: 140px;
        margin: 20px auto 0;
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
    .box {
      padding: 20px;

      h1 {
        font-size: 40px;
      }
    }
  }
}
</style>

