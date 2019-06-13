<template>
  <div class="home">
    <Banner/>
  </div>
</template>

<script>
import axios from 'axios'
import Banner from '@/components/Banner'
export default {
  name: 'home',
  components: {
    Banner
  },
  mounted(){
    axios.get('https://e4891f94-e6b8-460d-8456-1d904c285c7d.mock.pstmn.io/api/v2/achievements?user=5cf2f3a866681b004ee5b069')
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err))
  }
}
</script>
