<template>
  <main>
    <Banner :salon="salon" :allowEdit="false"/>
    <About :salon="salon" :allowEdit="false"/>
    <OpeningHours :allowEdit="false"/>
    <Book :products="products" :allowEdit="false"/>
    <Gallery :salon="salon" :gallery="gallery" :allowEdit="false"/>
    <Staff :staff="staff" :allowEdit="false"/>
    <PricingList :pricingList="pricingList" :allowEdit="false"/>
    <Contact :salon="salon"/>
    <Map :coord="salon.google_maps"/>
    <Footer :salon="salon"/>
  </main>
</template>

<script>
import { landingPage } from '@/utils/landingPage.js'
export default {
  mixins: [landingPage]
}
</script>