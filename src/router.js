import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Signup from './views/Signup.vue'
import Wizard from './views/Wizard.vue'
import Payment from './views/Payment.vue'
import LandingPage from './views/LandingPage.vue'
import Dashboard from './views/Dashboard.vue'

import store from './store'

Vue.use(Router)

store.dispatch('autoLogin')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkExactActiveClass: 'active',
  linkActiveClass: '',
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/payment',
      name: 'payment',
      component: Payment
    },
    {
      path: '/wizard',
      name: 'wizard',
      component: Wizard
    },
    {
      path: '/landingpage',
      name: 'landingpage',
      component: LandingPage
    },
    {
      path: '/admin',
      name: 'admin',
      component: Dashboard,
      beforeEnter(to, from, next){
        if(store.state.token) {
          next()
        } else {
          next('/login')
        }
      }
    }
  ]
})