import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

import axios from '@/axios'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    userId: null,
    salon: null,
    publicSalon: null,
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
    updatePublicSalon(state, salon) {
      state.publicSalon = salon
    },
    showSnackbar(state) {
      state.snackbar = true
    },
    hideSnackbar(state) {
      state.snackbar = false
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
    async login({commit, dispatch}, authData) {
      const res = await axios.post('/user/login', authData)
      const token = res.data.token
      const userId = res.data.id
      const salonId = res.data.currentSalon

      commit('authUser', {token, userId})

      localStorage.setItem('token', token)
      localStorage.setItem('userId', userId)

      console.log('user:: ', res.data)

      if (res.data.currentSalon === 'none')  return router.push('/wizard')
      await dispatch('getSalon', salonId)
      router.push('/admin')
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
      const user = await axios.get('/user', data)
      console.log(user)
    },
    async createSalon({ commit, dispatch, state}, payload) {
      const config = {
        headers: {
        'x-access-token': state.token
        }
      }
      const res = await axios.post('/salon', payload.salon, config)

      console.log(res)

      const createdSalon = res.data.salon
      const salonId = createdSalon.salon_id

      const updatedSalon = await axios.put('/salon', {lookup_latlng: true, salon_id: salonId}, config)
      console.log('salon: ', updatedSalon.data.salon)
      localStorage.setItem('salon', JSON.stringify(updatedSalon.data.salon))
      commit('updateSalon', updatedSalon)
      dispatch('getSalon', salonId)
    },
    async updateLogo({ commit, dispatch, state}, payload) {
      const config = {
        headers: {
          'x-access-token': state.token,
          'Content-Type': 'multipart/form-data'
        }
      }
      try {
        const res = await axios.put('/salon', payload, config)
        console.log(res)
      } catch(e){
        console.log('ERROR!!')
        console.log(e.reason)
      }
      // commit('updateSalon', updatedSalon)
      // dispatch('getSalon', salonId)
    },
    async updateSalon({commit, state}, salon) {
      const config = {headers: {'x-access-token': state.token}}
      salon.salon_id = state.salon.salon_id
      console.log('salon to update: ', salon)
      return await axios.put('/salon', salon, config)
    },
    async getSalonPublic({state, commit}, id) {
      const res = await axios.get(`/salon/public?salon_id=${id}`)
      const salon = res.data.salon
      commit('updatePublicSalon', salon)
    },
    async getSalon({commit, state}, id) {
      if (!id) id = state.salon.salon_id
      const config = {headers: {'x-access-token': state.token}}
      const res = await axios.get(`/salon?salon_id=${id}`, config)
      const salon = res.data.salon

      console.log('fetchedSalon: ', salon)

      localStorage.setItem('salon', JSON.stringify(salon))
      commit('updateSalon', salon)
      console.log(res)
      router.push('/admin')
    },
    autoLoadSalon({commit, state}) {
      const salon = JSON.parse(localStorage.getItem('salon'))
      if (!salon) return
      commit('updateSalon', salon)
    },
    async addStaff({commit, state}, payload){
      const config = {
        headers: {
          'x-access-token': state.token,
          'Content-Type': 'multipart/form-data'
        }
      }
      try {
        const res = await axios.post('/salon/staff', payload, config)
        console.log(res)
      } catch(e){
        console.log('ERROR!!')
        console.log(e)
      }
    },
    showSnackbar({commit}) {
      commit('showSnackbar')
    },
    hideSnackbar({commit}) {
      commit('hideSnackbar')
    },
    updateStaff({commit, state}, id) {
      const staff = state.salon.staff.filter(member => member.id !== id)
      commit('updateStaff', staff)
    }
  },
  getters: {
    userId(state){
      return state.userId
    },
    salon(state) {
      return state.salon
    },
    publicSalon(state) {
      return state.publicSalon
    },
    isAuth(state) {
      return state.token !== null
    },
    snackbar(state) {
      return state.snackbar
    }
  }
})