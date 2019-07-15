<template>
  <main>
    <ColorBox/>
    <Banner :salon="salon" :allowEdit="true"/>
    <About :about="salon.frontend_opts.about" :allowEdit="true"/>
    <OpeningHours :openingHours="salon.opening_hours" :allowEdit="true"/>
    <Gallery :gallery="salon.gallery" :description="salon.frontend_opts.gallery_description" :allowEdit="true"/>
    <Staff :staff="salon.staff" :allowEdit="true"/>
    <Products :products="salon.products" :allowEdit="true"/>
    <Contact :salon="salon"/>
    <Footer :name="salon.name" :social="salon.social"/>
  </main>
</template>

<script>
import {landingPage} from '@/utils/landingPage.js'
import ColorBox from '@/components/landingpage/ColorBox'
export default {
  mixins: [landingPage],
  components: {
    ColorBox
  },
  computed: {
    salon(){
      return this.$store.getters.salon
    }
  },
  mounted(){
    this.$store.dispatch('getUser')
  }
}
</script>

