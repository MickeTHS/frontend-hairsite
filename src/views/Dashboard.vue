<template>
  <main>
    <ColorBox/>
    <Banner :salon="salon"/>
    <About/>
    <OpeningHours/>
    <Book :products="products"/>
    <Gallery :gallery="gallery"/>
    <Staff :staff="staff"/>
    <PricingList :pricingList="pricingList"/>
    <Contact :salon="salon"/>
    <Map :coord="salon.coord"/>
    <Footer :salon="salon"/>
  </main>
</template>

<script>
import { landingPage } from '@/utils/landingPage.js'
import ColorBox from '@/components/landingpage/ColorBox'
export default {
  mixins: [landingPage],
  components: {
    ColorBox
  },
  mounted(){
    this.$store.dispatch('getUser')
  }
}
</script>

