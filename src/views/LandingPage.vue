<template>
  <main>
    <Banner :salon="salon" :allowEdit="false"/>
    <About :about="salon.frontend_opts.about" :allowEdit="false"/>
    <OpeningHours :openingHours="salon.opening_hours" :allowEdit="false"/>
    <Gallery :gallery="salon.gallery" :description="salon.frontend_opts.gallery_description" :allowEdit="false"/>
    <Staff :staff="salon.staff" :allowEdit="false"/>
    <Products :products="salon.products" :allowEdit="false"/>
    <Contact :salon="salon"/>
    <Footer :name="salon.name" :social="salon.social"/>
  </main>
</template>

<script>
import { landingPage } from '@/utils/landingPage.js'
export default {
  mixins: [landingPage]
}
</script>