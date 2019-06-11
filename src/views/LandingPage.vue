<template>
  <main>
    <Banner/>
    <section class="about">
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
    <section class="book">
      <div class="container">
        <h2>Book Now</h2>
        <div class="grid">
          <Product v-for="product in products" :product="product" :key="product.id"/>
        </div>
      </div>
    </section>
    <section class="gallery">
      <div class="container">
        <h2>Our Gallery</h2>
        <p>When it comes to hair, we work with, among other things, high quality products, a hair series that does not feel in the hair, but shapes and keeps the hair in place, while providing an incredibly nice shine and luster.</p>
      </div>
    </section>
    <section class="staff">
      <div class="container">
        <h2>Our Awesome Staff</h2>
        <div class="grid">
          <div class="col">
            <div class="team-member" style="background: url(/img/staff-1.jpg)">
              <div class="info">
                <h4>Helena</h4>
                <p>Hairdresser</p>
              </div>
              <div class="social">
                <a href>
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href>
                  <i class="fab fa-twitter"></i>
                </a>
                <a href>
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="team-member" style="background: url(/img/staff-2.jpg)">
              <div class="info">
                <h4>Micheal</h4>
                <p>Makeup Artist</p>
              </div>
              <div class="social">
                <a href>
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href>
                  <i class="fab fa-twitter"></i>
                </a>
                <a href>
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="team-member" style="background: url(/img/staff-3.jpg)">
              <div class="info">
                <h4>Sarah</h4>
                <p>Nail Expert</p>
              </div>
              <div class="social">
                <a href>
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href>
                  <i class="fab fa-twitter"></i>
                </a>
                <a href>
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="team-member" style="background: url(/img/staff-4.jpg)">
              <div class="info">
                <h4>Barbara</h4>
                <p>Style Expert</p>
              </div>
              <div class="social">
                <a href>
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href>
                  <i class="fab fa-twitter"></i>
                </a>
                <a href>
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pricing">
      <div class="container">
        <h2>Our Pricing</h2>
        <div class="grid">
          <div class="col">
            <h3>Haircuts</h3>
            <ul>
              <li>
                <span>Cut long hair</span>
                <span>340 SEK</span>
              </li>
              <li>
                <span>Cut short hair</span>
                <span>310 SEK</span>
              </li>
              <li>
                <span>Child cutting</span>
                <span>220 SEK</span>
              </li>
              <li>
                <span>Fade Cut</span>
                <span>350 SEK</span>
              </li>
              <li>
                <span>Fade Cut &amp; Beard</span>
                <span>550 SEK</span>
              </li>
            </ul>
          </div>
          <div class="col">
            <h3>Makeup</h3>
            <ul>
              <li>
                <span>Eye Liner</span>
                <span>340 SEK</span>
              </li>
              <li>
                <span>Mascara</span>
                <span>310 SEK</span>
              </li>
              <li>
                <span>Facial</span>
                <span>220 SEK</span>
              </li>
              <li>
                <span>Lip Liner</span>
                <span>120 SEK</span>
              </li>
              <li>
                <span>Face Glow</span>
                <span>220 SEK</span>
              </li>
            </ul>
          </div>
          <div class="col">
            <h3>Nails Styling</h3>
            <ul>
              <li>
                <span>Gel Nails</span>
                <span>340 SEK</span>
              </li>
              <li>
                <span>Glitter</span>
                <span>310 SEK</span>
              </li>
              <li>
                <span>Nail Buffing</span>
                <span>220 SEK</span>
              </li>
              <li>
                <span>Nail Polish</span>
                <span>120 SEK</span>
              </li>
              <li>
                <span>Nail Shape</span>
                <span>220 SEK</span>
              </li>
            </ul>
          </div>
          <div class="col">
            <h3>Cosmetics</h3>
            <ul>
              <li>
                <span>Foundation</span>
                <span>340 SEK</span>
              </li>
              <li>
                <span>CC Cream</span>
                <span>310 SEK</span>
              </li>
              <li>
                <span>Cold Cream</span>
                <span>220 SEK</span>
              </li>
              <li>
                <span>Body Powder</span>
                <span>120 SEK</span>
              </li>
              <li>
                <span>Concealer</span>
                <span>220 SEK</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="contact">
      <div class="container">
        <h2>Contact Us</h2>
        <div class="grid">
          <div class="col">
            <form action>
              <input type="text" placeholder="Enter Your Name">
              <input type="email" placeholder="Enter Your Email">
              <input type="tel" placeholder="Enter Your Phone">
              <input type="text" placeholder="Title">
              <textarea name="message" placeholder="Message"></textarea>
              <button class="btn">Submit</button>
            </form>
          </div>
          <div class="col">
            <p>Send us a message using this form! Or contact us directly using the following:</p>
            <ul class="contact-info">
              <li>
                <i class="fas fa-location-arrow"></i> California, 16440 - USA
              </li>
              <li>
                <i class="fas fa-phone-alt"></i> +160 8751 2345 0000
              </li>
              <li>
                <i class="fas fa-paper-plane"></i> hello@techpalace.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section class="map-s">
      <div class="container">
        <Map/>
      </div>
    </section>
    <footer>
      <div class="container">
        <p>© 2019 TechPalace Salon All Rights Reserved</p>
        <p>
          <a href>
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href>
            <i class="fab fa-twitter"></i>
          </a>
          <a href>
            <i class="fab fa-instagram"></i>
          </a>
          <a href>
            <i class="fab fa-linkedin-in"></i>
          </a>
        </p>
      </div>
    </footer>
  </main>
</template>

<script>
import VueMasonryGallery from "@/components/VueMasonryGallery";
import Banner from "@/components/landingpage/Banner";
import Product from "@/components/landingpage/Product";
import Map from "@/components/landingpage/Map";
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Färgningar",
          imageUrl: "/img/products/product-1.jpg"
        },
        {
          id: 2,
          name: "Klippningar",
          imageUrl: "/img/products/product-2.jpg"
        },
        {
          id: 3,
          name: "Flerfärg/Slingor",
          imageUrl: "/img/products/product-3.jpg"
        },
        {
          id: 4,
          name: "Uppsättningar och Make-up",
          imageUrl: "/img/products/product-4.jpg"
        },
        {
          id: 5,
          name: "Hårförlängningar och permanenter",
          imageUrl: "/img/products/product-5.jpg"
        },
        {
          id: 6,
          name: "Hårvård",
          imageUrl: "/img/products/product-6.jpg"
        },
        {
          id: 7,
          name: "Skägg",
          imageUrl: "/img/products/product-7.jpg"
        },
        {
          id: 8,
          name: "Trådning/Färg/Öronhåltagning",
          imageUrl: "/img/products/product-8.jpg"
        }
      ],
      gallery: [
        "/img/staff-1.jpg", 
        "/img/staff-2.jpg",
        "/img/staff-3.jpg",
        "/img/staff-4.jpg"
      ]
    };
  },
  components: {
    Banner,
    Product,
    Map
  }
};
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
  }
}

.gallery {
  p {
    width: 100%;
    max-width: 640px;
    text-align: center;
    margin: 0 auto;
  }
}

.staff {
  .team-member {
    width: 240px;
    height: 350px;
    background-size: cover !important;
    position: relative;
    .info {
      background-color: rgba(192, 211, 84, 0.9);
      color: #fff;
      text-align: center;
      height: 84px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-top: 16px;
      h4 {
        font-style: italic;
      }
      p {
        color: #fff;
      }
    }
    .social {
      position: absolute;
      bottom: 67px;
      left: 0;
      width: 100%;
      display: flex;
      justify-content: center;
      a {
        background-color: #fff;
        height: 36px;
        width: 36px;
        line-height: 36px;
        border-radius: 50%;
        text-align: center;
        color: $theme1;
        margin: 0 4px;
      }
    }
  }
}

.book {
  .grid {
    flex-wrap: wrap;
    justify-content: center;
  }
}

.pricing {
  .grid {
    .col {
      h3 {
        margin-bottom: 10px;
        color: #444;
        font-style: italic;
      }
      ul {
        li {
          overflow: hidden;
          &:before {
            content: ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ";
            float: left;
            width: 0;
            white-space: nowrap;
            color: #afafaf;
          }
          span {
            background-color: #fff;
            &:last-child {
              float: right;
              color: $theme1;
            }
          }
        }
      }
    }
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

.map-s {
  padding: 0 0 50px 0;
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
</style>

