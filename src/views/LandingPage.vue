<template>
  <main v-if="salon">
    <Banner :salon="salon" :allowEdit="false"/>
    <About :salon="salon" :allowEdit="false" />
    <OpeningHours :salon="salon" :allowEdit="false" />
    <Gallery :salon="salon" :gallery="gallery" :allowEdit="false" />
    <Staff :salon="salon"/>
    <Products :salon="salon" :allowEdit="false"/>
    <Contact :salon="salon"/>
    <Footer :salon="salon" />
  </main>
</template>

<script>
import { landingPage } from '@/utils/landingPage.js'
export default {
  mixins: [landingPage],
  computed: {
    salon(){
      return this.$store.getters.publicSalon
    },
    gallery(){
      return this.$store.getters.gallery
    }
  },
  created(){
    const id = "063a07ad-f76e-47f9-b422-c8d3e1c965ff"
    this.$store.dispatch('getSalonPublic', id)
  },
}
</script>