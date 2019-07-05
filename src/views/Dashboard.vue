<template>
  <main>
    <ColorBox/>
    <Banner :salon="salon" :allowEdit="true"/>
    <About :allowEdit="true"/>
    <OpeningHours :allowEdit="true"/>
    <Book :products="products" :allowEdit="true"/>
    <Gallery :gallery="gallery" :allowEdit="true"/>
    <Staff :staff="staff" :allowEdit="true"/>
    <PricingList :pricingList="pricingList" :allowEdit="true"/>
    <Contact :salon="salon"/>
    <!-- <Map :coord="salon.google_maps"/> -->
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

