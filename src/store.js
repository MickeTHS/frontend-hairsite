import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

import axios from '@/axios'
import router from './router'
import sampleData from './data/sample.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    userId: null,
    salon: null,
    snackbar: false
  },
  mutations: {
    authUser(state, userData) {
      state.token = userData.token
      state.userId = userData.userId
    },
    clearAuth(state) {
      state.token = null
      state.userId = null
    },
    updateSalon(state, salon) {
      state.salon = salon
    },
    showSnackbar(state) {
      state.snackbar = true
    },
    hideSnackbar(state) {
      state.snackbar = false
    },
    updateProducts(state, products) {
      state.products = products
    },
    updateStaff(state, staff) {
      state.staff = staff
    },
  },
  actions: {
    async signup({commit}, authData) {
      try {
        const res = await axios.post('/user/create', authData)
        const token = res.data.token
        const userId = res.data.id

        commit('authUser', {token, userId})

        localStorage.setItem('token', token)
        localStorage.setItem('userId', userId)
        router.push('/wizard')
      } catch (e) {
        if (e.response && err.response.status === 400) {
          commit('showSnackbar')
          setTimeout(() => {
            commit('hideSnackbar')
          }, 6000)
        } else {
          console.log(e)
        }
      }
    },
    async login({commit}, authData) {
      const res = await axios.post('/user/login', authData)
      const token = res.data.token
      const userId = res.data.id

      commit('authUser', {
        token,
        userId
      })

      localStorage.setItem('token', token)
      localStorage.setItem('userId', userId)

      console.log('user:: ', res.data)

      if (res.data.currentSalon === 'none') {
        router.push('/wizard')
      } else {
        router.push('/admin')
      }
    },
    autoLogin({commit}) {
      const token = localStorage.getItem('token')
      const userId = localStorage.getItem('userId')

      if (!token) return
      commit('authUser', {
        token,
        userId
      })
    },
    logout({commit}) {
      commit('clearAuth')

      localStorage.removeItem('token')
      localStorage.removeItem('userId')
      localStorage.removeItem('salon')

      router.replace('/login')
    },
    async getUser({commit, state}) {
      const data = {
        user_id: state.userId,
        headers: {'x-access-token': state.token}
      }
      const res = await axios.get('/user', data)
      console.log(res)
    },
    async createSalon({ commit, dispatch, state}, salon) {

      const sample = sampleData[0]

      salon.user_id = state.userId
      salon.opening_hours = sample.opening_hours
      salon.social = sample.social
      salon.gallery = sample.gallery
      salon.products = sample.products
      salon.staff = sample.staff
      salon.frontend_opts.heading = `Welcome to ${salon.name} Salon`
      salon.frontend_opts.sub_heading = sample.frontend_opts.sub_heading
      salon.frontend_opts.about = sample.frontend_opts.about
      salon.frontend_opts.gallery_description = sample.frontend_opts.gallery_description
    
      const config = {headers: {'x-access-token': state.token}}

      console.log('salon to create: ', salon)

      const res = await axios.post('/salon', salon, config)
      const createdSalon = res.data.salon
      const salonId = createdSalon.salon_id

      const updatedSalon = await axios.put('/salon', {lookup_latlng: true, salon_id: salonId}, config)
      console.log('salon: ', updatedSalon.data.salon)
      localStorage.setItem('salon', JSON.stringify(updatedSalon))
      commit('updateSalon', updatedSalon)
      dispatch('getSalon', salonId)
    },
    async updateSalon({commit, state}, salon) {
      const config = {headers: {'x-access-token': state.token}}
      await axios.post('/salon', salon, config)
    },
    async getSalonPublic({state, commit}, id) {
      const res = await axios.get(`/salon/public?salon_id=${id}`)
      console.log(res)
    },
    async getSalon({commit, state}, id) {
      console.log('id:: ', id)
      const config = {headers: {'x-access-token': state.token}}
      const res = await axios.get(`/salon?salon_id=${id}`, config)
      const salon = res.data.salon

      localStorage.setItem('salon', JSON.stringify(salon))
      commit('updateSalon', salon)
      console.log(res)
      router.push('/admin')
    },
    autoLoadSalon({commit, state}) {
      const salon = JSON.parse(localStorage.getItem('salon'))
      console.log('loadedSalon', salon)
      if (!salon) return
      commit('updateSalon', salon)
    },
    showSnackbar({commit}) {
      commit('showSnackbar')
    },
    hideSnackbar({commit}) {
      commit('hideSnackbar')
    },
    updateProducts({commit, state}, id) {
      const products = state.salon.products.filter(product => product.id !== id)
      commit('updateProducts', products)
    },
    updateStaff({commit, state}, id) {
      const staff = state.salon.staff.filter(member => member.id !== id)
      commit('updateStaff', staff)
    }
  },
  getters: {
    salon(state) {
      return state.salon
    },
    isAuth(state) {
      return state.token !== null
    },
    snackbar(state) {
      return state.snackbar
    }
  }
})