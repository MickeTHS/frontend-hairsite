<template>
  <section class="contact" id="contact">
    <div class="container">
      <h2>Contact Us</h2>
      <div class="grid">
        <div class="col col-6 map-wrapper">
          <div class="map">
            <img :src="salon.google_maps.static_link" alt="">
          </div>
        </div>
        <div class="col col-6 contact-info">
          <p>Send us a message using this form! Or contact us directly using the following:</p>
          <ul class="contact-info">
            <li>
              <i class="material-icons" :style="{color: theme}">location_on</i>
              {{ salon.postal_address }}
            </li>
            <li>
              <i class="material-icons" :style="{color: theme}">phone_in_talk</i>
              {{ salon.phone_numbers }}
            </li>
            <li>
              <i class="material-icons" :style="{color: theme}">message</i>
              {{ salon.emails }}
            </li>
          </ul>
        </div>
        <div class="col col-12">
          <form action>
            <input type="text" placeholder="Enter Your Name" />
            <input type="email" placeholder="Enter Your Email" />
            <input type="tel" placeholder="Enter Your Phone" />
            <input type="text" placeholder="Title" />
            <textarea name="message" placeholder="Message"></textarea>
            <button class="btn" :style="{background: theme}">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['salon', 'theme']
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
.contact {
  .grid {
    flex-wrap: wrap;
    justify-content: flex-start;
    .col {
      &.col-12 {
        flex-basis: 100%;
      }
      &.col-6 {
        flex-basis: 50%;
        &.map-wrapper {
          display: flex;
          width: 50%;
         .map {
            overflow: hidden;
            display: flex;
            justify-content: center;
         }
        }
        &.contact-info {
          padding: 30px;
        }
      }
    }
  }
  form {
    width: 100%;
    max-width: 800px;
    input,
    textarea {
      border-radius: 4px;
      background-color: #fff;
      border: 1px solid #ddd;
      padding: 10px 20px;
      margin: 4px;
      outline: none;
      font-size: 14px;
      font-weight: 300;
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
    .material-icons {
      color: $theme1;
      width: 30px;
      margin: 8px 0;
      font-size: 24px;
      vertical-align: middle;
    }
  }
}
@media (max-width: 900px) {
  .contact {
    .grid {
      display: block;
      .col.col-6 {
        width: 100%;
        flex-basis: 100%;
        padding: 10px !important;
        &.map-wrapper {
          width: 100%;
          .map {
            width: 100%;
          }
        }
      }
    }
  }
}
@media (max-width: 500px) {
  .contact {
    form {
      input,
      textarea {
        margin: 5px 0;
        width: 100%;
      }
    }
  }
}
</style>



