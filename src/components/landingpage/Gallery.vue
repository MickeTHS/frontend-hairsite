<template>
  <section class="gallery" id="gallery" :style="{background: salon.frontend_opts.theme.sectionsBackgrounds[2]}">
    <div class="container">
      <h2>Our Gallery</h2>
      <p>
        <i
          class="material-icons edit"
          v-if="allowEdit"
          :style="{background: salon.frontend_opts.theme.primary}"
          @click="$emit('updateGalleryDescription')"
        >edit</i>
        {{ salon.frontend_opts.gallery_description || '--'}}
      </p>
      <div class="images">
        <i class="material-icons add" v-if="allowEdit" @click="$emit('addToGallery')" :style="{background: salon.frontend_opts.theme.primary}">add</i>
        <div
          class="img"
          v-for="(img, index) in gallery"
          :style="{background: 'url(' + baseURL + img.filepath + img.filename + ')'}"
          :key="index"
        ></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['salon', 'gallery', 'allowEdit'],
  data(){
    return {
      baseURL: 'http://localhost:8081/'
    }
  }
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
      background-position: center !important;
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

