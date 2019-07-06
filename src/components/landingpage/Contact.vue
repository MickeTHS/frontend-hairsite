<template>
  <section class="contact" id="contact">
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
              <i class="fas fa-location-arrow"></i>
              {{ salon.postal_address }}
            </li>
            <li>
              <i class="fas fa-phone"></i>
              {{ salon.phone_numbers }}
            </li>
            <li>
              <i class="fas fa-paper-plane"></i>
              {{ salon.emails }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["salon"]
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
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
@media (max-width: 900px) {
  .contact {
    .grid {
      display: block;
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



