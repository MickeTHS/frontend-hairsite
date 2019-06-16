<template>
  <main>
    <Banner :salon="salon"/>
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
    <section class="book" id="book">
      <div class="container">
        <h2>Book Now</h2>
        <div class="grid">
          <Product v-for="product in products" :product="product" :key="product.id"/>
        </div>
      </div>
    </section>
    <section class="gallery" id="gallery">
      <div class="container">
        <h2>Our Gallery</h2>
        <p>When it comes to hair, we work with, among other things, high quality products, a hair series that does not feel in the hair, but shapes and keeps the hair in place, while providing an incredibly nice shine and luster.</p>
        <Waterfall :gutterWidth="10" :gutterHeight="10" :resizable="true">
          <WaterfallItem v-for="(item, index) in gallery" :key="index" :width="278">
            <img :src="item" alt>
          </WaterfallItem>
        </Waterfall>
      </div>
    </section>
    <Staff :staff="staff"/>
    <PricingList :pricingList="pricingList" />
    <Contact :salon="salon"/>
    <Map :coord="salon.coord" />
    <Footer :salon="salon"/>
  </main>
</template>

<script>
import { landingPage } from '@/utils/landingPage.js'
export default {
  mixins: [landingPage]
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Playfair Display";
}

section {
  padding: 60px 0;
  background: #fff;
  h2 {
    text-align: center;
    font-size: 32px;
    color: $theme1;
    margin-bottom: 40px;
  }
  p {
    line-height: 1.8;
  }
  li {
    line-height: 1.5;
  }
  .grid {
    display: flex;
    justify-content: space-between;
    .col {
      padding: 10px;
      flex-grow: 1;
    }
  }
}

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

.gallery {
  p {
    width: 100%;
    max-width: 640px;
    text-align: center;
    margin: 12px auto 24px;
  }
}

.book {
  .grid {
    flex-wrap: wrap;
    justify-content: center;
  }
}

.contact {
  form {
    input,
    textarea {
      border-radius: 4px;
      background-color: #fff;
      border: 1px solid #ddd;
      padding: 12px 24px;
      margin: 5px;
      outline: none;
      font-size: 14px;
      &::placeholder {
        color: #aaa;
      }
    }
    input {
      width: calc(50% - 10px);
    }
    textarea {
      height: 100px;
      resize: none;
      font-family: "Roboto", sans-serif;
      width: calc(100% - 10px);
    }
    button {
      background-color: $theme1;
      border-radius: 4px;
      margin: 10px 5px;
    }
  }
  .contact-info {
    i {
      color: $theme1;
      width: 30px;
      margin: 8px 0;
      font-size: 18px;
    }
  }
}

footer {
  background-color: #222;
  padding: 20px 0;
  .container {
    display: flex;
    justify-content: space-between;
    p {
      color: #fff;
      font-size: 14px;
    }
    i {
      color: #fff;
      margin: 0 10px;
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

@media (max-width: 900px) {
  .contact {
    .grid {
      display: block;
    }
  }
}
@media (max-width: 600px) {
  footer {
    .container {
      display: block;
      text-align: center;
      p:first-child {
        margin-bottom: 16px;
      }
    }
  }
}
@media (max-width: 500px) {
  .contact {
    form {
      input, textarea {
        margin: 5px 0;
        width: 100%;
      }
    }
  }
}
</style>

