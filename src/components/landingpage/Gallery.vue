<template>
  <section class="gallery" id="gallery">
    <div class="container">
      <h2>Our Gallery</h2>
      <p>
        <i class="material-icons edit" v-if="allowEdit" @click="$emit('updateGalleryDescription')">edit</i>
        {{ description }}
      </p>
      <div class="images">
        <i class="material-icons add" v-if="allowEdit">add</i>
        <div
          class="img"
          v-for="(img, index) in gallery"
          :style="{background: 'url(' + img + ')'}"
          :key="index"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['gallery', 'description', 'allowEdit']
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
      min-width: 220px;
      max-width: 420px;
      height: 250px;
      margin: 5px;
      background-size: cover !important;
    }
  }
}
@media (max-width: 1320px) {
  .gallery {
    .images {
      .img {
        flex-basis: calc(25% - 10px);
      }
    }
  }
}
@media (max-width: 1080px) {
  .gallery {
    .images {
      .img {
        flex-basis: calc(33.3333% - 10px);
      }
    }
  }
}
@media (max-width: 860px) {
  .gallery {
    .images {
      .img {
        flex-basis: calc(50% - 10px);
      }
    }
  }
}
@media (max-width: 550px) {
  .gallery {
    .images {
      .img {
        flex-basis: 100%;
        margin: 5px 0;
      }
    }
  }
}
</style>

