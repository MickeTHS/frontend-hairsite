import Vue from 'vue'
import Vuetify from 'vuetify'
import vueSmoothScroll from 'vue2-smooth-scroll'

import App from './App.vue'
import router from './router'
import store from './store'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)
Vue.use(vueSmoothScroll)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
