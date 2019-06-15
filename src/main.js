import Vue from 'vue'
import vueSmoothScroll from 'vue2-smooth-scroll'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(vueSmoothScroll)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
