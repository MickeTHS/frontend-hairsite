<template>
  <main v-if="salon">
    <Banner :salon="salon" :allowEdit="false" :theme="themes[salon.frontend_opts.theme - 1]"/>
    <About :about="salon.frontend_opts.about" :allowEdit="false" :theme="themes[salon.frontend_opts.theme - 1]"/>
    <OpeningHours :openingHours="salon.opening_hours" :allowEdit="false" :theme="themes[salon.frontend_opts.theme - 1]"/>
    <Gallery :gallery="salon.gallery" :description="salon.frontend_opts.gallery_description" :allowEdit="false" :theme="themes[salon.frontend_opts.theme - 1]"/>
    <Staff :staff="salon.staff" :allowEdit="false" :theme="themes[salon.frontend_opts.theme - 1]"/>
    <Products :products="salon.products" :allowEdit="false" :theme="themes[salon.frontend_opts.theme - 1]"/>
    <Contact :salon="salon" :theme="themes[salon.frontend_opts.theme - 1]"/>
    <Footer :name="salon.name" :social="salon.social"/>
  </main>
</template>

<script>
import { landingPage } from '@/utils/landingPage.js'
export default {
  mixins: [landingPage],
  computed: {
    salon(){
      return this.$store.getters.publicSalon
    }
  },
  created(){
    const id = "f9e63d95-8e84-4ca6-bb3d-b8e8e784b6d5"
    this.$store.dispatch('getSalonPublic', id)
  },
}
</script>