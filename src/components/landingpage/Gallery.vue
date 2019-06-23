<template>
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
</template>

<script>
import { Waterfall, WaterfallItem } from "vue2-waterfall"
export default {
  props: ['gallery'],
  components: {
    Waterfall, 
    WaterfallItem
  }
}
</script>

<style lang="scss">
.gallery {
  p {
    width: 100%;
    max-width: 640px;
    text-align: center;
    margin: 12px auto 24px;
  }
}
</style>

