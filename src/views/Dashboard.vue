<template>
  <main>
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
export default {
  mixins: [landingPage],
  mounted(){
    this.$store.dispatch('getUser')
  }
}
</script>

