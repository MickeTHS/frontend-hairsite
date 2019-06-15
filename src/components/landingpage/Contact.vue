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
              {{ salon.address }}
            </li>
            <li>
              <i class="fas fa-phone-alt"></i>
              {{ salon.phone }}
            </li>
            <li>
              <i class="fas fa-paper-plane"></i>
              {{ salon.email }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: ['salon']
}
</script>
