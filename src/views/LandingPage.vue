<template>
  <main v-if="salon">
    <Banner :salon="salon" :allowEdit="false"/>
    <About :salon="salon" :allowEdit="false" />
    <OpeningHours :salon="salon" :allowEdit="false" />
    <Gallery :salon="salon" :allowEdit="false" />
    <Staff :salon="salon" />
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
    }
  },
  created(){
    const salonId = this.$route.params.salonId
    this.$store.dispatch('getSalonPublic', salonId)
  },
}
</script>