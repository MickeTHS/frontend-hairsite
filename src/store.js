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
    snackbar: {
      open: false,
      message: null,
      success: false,
    }
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
    showSnackbar(state, snackbar) {
      state.snackbar = snackbar
    },
    updateStaff(state, staff) {
      state.staff = staff
    }
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
        const message = e.response.data.message || e.response.data.reason || 'ERROR!'
        const snackbar = {
          open: true,
          message: message,
          success: false
        }
        commit('showSnackbar', snackbar)
      }
    },
    async login({commit, dispatch}, authData) {
      try {
        const res = await axios.post('/user/login', authData)
        console.log('user: ', res.data)
        const token = res.data.token
        const userId = res.data.id
        const salonId = res.data.currentSalon

        commit('authUser', {token, userId})

        localStorage.setItem('token', token)
        localStorage.setItem('userId', userId)
        if (res.data.currentSalon === 'none') return router.push('/wizard')
        await dispatch('getSalon', salonId)
        router.push('/admin')
      } catch (e) {
        const message = e.response.data.message || 'ERROR!'
        const snackbar = {
          open: true,
          message: message,
          success: false
        }
        commit('showSnackbar', snackbar)
      }
    },
    autoLogin({commit}) {
      const token = localStorage.getItem('token')
      const userId = localStorage.getItem('userId')

      if (!token) return
      commit('authUser', {token, userId})
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
    },
    async createSalon({commit, dispatch, state}, payload) {
      const config = { headers: {'x-access-token': state.token} }
      const res = await axios.post('/salon', payload.salon, config)

      console.log(res)

      const createdSalon = res.data.salon
      const salonId = createdSalon.salon_id

      const updatedSalon = await axios.put('/salon', {
        lookup_latlng: true,
        salon_id: salonId
      }, config)
      console.log('salon: ', updatedSalon.data.salon)
      localStorage.setItem('salon', JSON.stringify(updatedSalon.data.salon))
      commit('updateSalon', updatedSalon)
      dispatch('getSalon', salonId)
    },
    async addLogo({commit, dispatch, state}, payload) {
      const config = {
        headers: {
          'x-access-token': state.token,
          'Content-Type': 'multipart/form-data'
        }
      }
      try {
        const res = await Axios.post('http://localhost:8081/fileupload', payload, config)
        console.log(res)
        const logo = res.data.files[0]
        const frontendOpts = state.salon.frontend_opts
        frontendOpts.logo = logo
        console.log('fopts', frontendOpts)
        await dispatch('updateSalon', {frontend_opts: frontendOpts})
        dispatch('getSalon', state.salon.salon_id)

      } catch (e) {
        console.log('ERROR!!')
        console.log(e.reason)
      }
    },
    async updateLogo({commit, dispatch, state}, payload) {
      const config = {
        headers: {
          'x-access-token': state.token,
          'Content-Type': 'multipart/form-data'
        }
      }
      try {
        const res = await axios.put('/salon', payload, config)
        console.log(res)
      } catch (e) {
        console.log('ERROR!!')
        console.log(e.reason)
      }
    },
    async addToGallery({commit, dispatch, state}, fd) {
      const config = {
        headers: {
          'x-access-token': state.token,
          'Content-Type': 'multipart/form-data'
        }
      }
      try {
        const res = await Axios.post('http://localhost:8081/fileupload', fd, config)
        const message = 'Images uploaded successfully'
        const snackbar = {
          open: true,
          message: message,
          success: true
        }
        commit('showSnackbar', snackbar)
        dispatch('getSalon', state.salon.salon_id)
      } catch (e) {
        console.log('ERROR!!')
        console.log(e.reason)
      }
    },
    async updateSalon({commit, state}, salon) {
      const config = { headers: {'x-access-token': state.token} }
      salon.salon_id = state.salon.salon_id
      console.log('salon to update: ', salon)
      return await axios.put('/salon', salon, config)
    },
    async getSalonPublic({state, commit}, id) {
      const res = await axios.get(`/salon/extended?salon_id=${id}`)
      const salon = res.data.salon
      commit('updatePublicSalon', salon)
    },
    async getSalon({commit, dispatch, state}, id) {
      if (!id) id = state.salon.salon_id
      const res = await axios.get(`/salon/extended?salon_id=${id}`)
      const salon = res.data.salon

      console.log({salon})

      localStorage.setItem('salon', JSON.stringify(salon))
      commit('updateSalon', salon)
      router.push('/admin')
    },
    async autoLoadSalon({commit, state}) {
      try {
        const salon = JSON.parse(localStorage.getItem('salon'))
        if (!salon) return
        commit('updateSalon', salon)
      } catch (e) {
        localStorage.clear()
      }
    },
    async addStaff({commit, state}, payload) {
      const config = {
        headers: {
          'x-access-token': state.token
        }
      }
      try {
        const res = await axios.post('/salon/staff', payload.staff, config)
        console.log(res)
        const galleryId = res.data.user.gallery_id
        const filesUploadConfig = {
          headers: {
            'x-access-token': state.token,
            'Content-Type': 'multipart/form-data'
          }
        }
        const uploadRes = await Axios.post('http://localhost:8081/fileupload', payload.fd, filesUploadConfig)
        console.log(uploadRes)
      } catch (e) {
        console.log('ERROR!!')
        console.log(e)
      }
    },
    showSnackbar({commit}, snackbar) {
      commit('showSnackbar', snackbar)
    },
    updateStaff({commit, state}, id) {
      const staff = state.salon.staff.filter(member => member.id !== id)
      commit('updateStaff', staff)
    }
  },
  getters: {
    userId(state) {
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