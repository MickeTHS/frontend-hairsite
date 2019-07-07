<template>
  <section class="gallery" id="gallery">
    <div class="container">
      <h2>Our Gallery</h2>
      <p><i class="far fa-edit" v-if="allowEdit"></i> {{ salon.frontend_opts.gallery_description }}</p>
      <div class="images">
        <i class="fas fa-plus" v-if="allowEdit"></i>

        <!-- <Waterfall :gutterWidth="10" :gutterHeight="10" :resizable="true">
          <WaterfallItem v-for="(item, index) in gallery" :key="index" :width="278">
            <img :src="item" alt>
          </WaterfallItem>
        </Waterfall> -->

        <div 
          class="img" 
          v-for="(img, index) in gallery" 
          :style="{background: 'url(' + img + ')'}" 
          :key="index">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// import { Waterfall, WaterfallItem } from "vue2-waterfall";
export default {
  props: ["salon", "gallery", "allowEdit"],
  // components: {
  //   Waterfall,
  //   WaterfallItem
  // }
};
</script>

<style lang="scss">
.gallery {
  p {
    width: 100%;
    max-width: 640px;
    text-align: center;
    margin: 12px auto 24px;
    position: relative;
  }
  .images {
    padding-top: 20px;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    .img {
      flex-basis: calc(20% - 10px);
      min-width: 230px;
      max-width: 430px;
      height: 250px;
      margin: 5px;
      background-size: cover !important;
    }
  }
}
</style>

