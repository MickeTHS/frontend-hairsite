<template>
  <section class="about" id="about">
    <div class="container">
      <h2>Who We Are</h2>
      <div class="grid">
        <div class="col">
          <img src="/img/img-1.jpg" alt>
        </div>
        <div class="col">
          <p>Welcome to TechPlalace Salon! We believe in creativity, to see who you are and listen to who you want to be. From that we create your look. We are a strong team in constant development working towards one and the same goal; to give you a personalized overall experience!</p>
          <p>We take time for our customers, offer careful consultations and tailor-made treatments. Getting to us should at the same time feel relaxing and exclusive. exclusive product line that takes care of the quality of the hair through high quality raw materials and gives expressive style through its exceptional styling ability.</p>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.about {
  .grid {
    align-items: center;
    .col {
      &:first-child {
        text-align: right;
        padding-right: 20px;
      }
      &:last-child {
        text-align: left;
        padding-left: 20px;
      }
    }
    p {
      line-height: 1.8;
      width: 100%;
      max-width: 510px;
    }
    img {
      max-width: 100%;
    }
  }
}
@media (max-width: 1024px) {
  .about {
    .grid {
      display: block;
      .col {
        &:first-child {
          text-align: center;
        }
        p {
          margin: 0 auto;
        }
      }
    }
  }
}
</style>

