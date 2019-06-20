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
  mixins: [landingPage],
  mounted(){
    this.$store.dispatch('getUser')
  }
}
</script>

