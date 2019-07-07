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
    location: null,
    products: [{
        id: 1,
        name: "Färgningar",
        imageUrl: "/img/products/product-1.jpg"
      },
      {
        id: 2,
        name: "Klippningar",
        imageUrl: "/img/products/product-2.jpg"
      },
      {
        id: 3,
        name: "Flerfärg/Slingor",
        imageUrl: "/img/products/product-3.jpg"
      },
      {
        id: 4,
        name: "Uppsättningar och Make-up",
        imageUrl: "/img/products/product-4.jpg"
      },
      {
        id: 5,
        name: "Hårförlängningar och permanenter",
        imageUrl: "/img/products/product-5.jpg"
      },
      {
        id: 6,
        name: "Hårvård",
        imageUrl: "/img/products/product-6.jpg"
      },
      {
        id: 7,
        name: "Skägg",
        imageUrl: "/img/products/product-7.jpg"
      },
      {
        id: 8,
        name: "Trådning/Färg/Öronhåltagning",
        imageUrl: "/img/products/product-8.jpg"
      }
    ],
    gallery: [
      "/img/gallery/img-1.jpg",
      "/img/gallery/img-2.jpg",
      "/img/gallery/img-3.jpg",
      "/img/gallery/img-4.jpg",
      "/img/gallery/img-5.jpg",
      "/img/gallery/img-6.jpg",
      "/img/gallery/img-7.jpg",
      "/img/gallery/img-8.jpg",
      "/img/gallery/img-9.jpg"
    ],
    pricingList: [{
        id: 1,
        title: 'Haircuts',
        services: [{
            title: 'Cut long hair',
            price: 340
          },
          {
            title: 'Cut short hair',
            price: 310
          },
          {
            title: 'Child cutting',
            price: 220
          },
          {
            title: 'Fade Cut',
            price: 350
          },
          {
            title: 'Fade Cut & Beard',
            price: 550
          }
        ]
      },
      {
        id: 2,
        title: 'Makeup',
        services: [{
            title: 'Eye Liner',
            price: 340
          },
          {
            title: 'Mascara',
            price: 310
          },
          {
            title: 'Facial',
            price: 220
          },
          {
            title: 'Lip Liner',
            price: 350
          },
          {
            title: 'Face Glow',
            price: 550
          }
        ]
      },
      {
        id: 3,
        title: 'Nails Styling',
        services: [{
            title: 'Gel Nails',
            price: 340
          },
          {
            title: 'Glitter',
            price: 310
          },
          {
            title: 'Nail Buffing',
            price: 220
          },
          {
            title: 'Nail Polish',
            price: 350
          },
          {
            title: 'Nail Shape',
            price: 550
          },
        ]
      },
      {
        id: 4,
        title: 'Cosmetics',
        services: [{
            title: 'Foundation',
            price: 340
          },
          {
            title: 'CC Cream',
            price: 310
          },
          {
            title: 'Cold Cream',
            price: 220
          },
          {
            title: 'Body Powder',
            price: 350
          },
          {
            title: 'Concealer',
            price: 550
          }
        ]
      }
    ],
    staff: [{
        id: 1,
        name: 'Helena',
        title: 'Hairdresser',
        imageURL: '/img/staff-1.jpg',
        social: [{
            name: 'facebook',
            url: 'https://facebook.com/'
          },
          {
            name: 'twitter',
            url: 'https://twitter.com/'
          },
          {
            name: 'linkedin',
            url: 'https://linkedin.com/'
          }
        ]
      },
      {
        id: 2,
        name: 'Micheal',
        title: 'Makeup Artist',
        imageURL: '/img/staff-2.jpg',
        social: [{
            name: 'facebook',
            url: 'https://facebook.com/'
          },
          {
            name: 'twitter',
            url: 'https://twitter.com/'
          },
          {
            name: 'linkedin',
            url: 'https://linkedin.com/'
          }
        ]
      },
      {
        id: 3,
        name: 'Sarah',
        title: 'Nail Expert',
        imageURL: '/img/staff-3.jpg',
        social: [{
            name: 'facebook',
            url: 'https://facebook.com/'
          },
          {
            name: 'twitter',
            url: 'https://twitter.com/'
          },
          {
            name: 'linkedin',
            url: 'https://linkedin.com/'
          }
        ]
      },
      {
        id: 4,
        name: 'Barbara',
        title: 'Style Expert',
        imageURL: '/img/staff-4.jpg',
        social: [{
            name: 'facebook',
            url: 'https://facebook.com/'
          },
          {
            name: 'twitter',
            url: 'https://twitter.com/'
          },
          {
            name: 'linkedin',
            url: 'https://linkedin.com/'
          }
        ]
      },
    ],
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
    updateLocation(state, location) {
      state.location = location
    },
    updateProducts(state, products) {
      state.products = products
    },
    updateStaff(state, staff) {
      state.staff = staff
    },
    updatePricingList(state, list) {
      state.pricingList = list
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

      salon.user_id = state.userId
      salon.social = [
        {name: 'facebook', url: 'https://facebook.com/'},
        {name: 'twitter', url: 'https://twitter.com/'},
        {name: 'instagram', url: 'https://instagram.com/'},
        {name: 'linkedin', url: 'https://linkedin.com/'}
      ]

      salon.frontend_opts.heading = `Welcome to ${salon.salon_name} Salon`
      salon.frontend_opts.sub_heading = 'A unique hairdressing salon & barber Salon. With us, we have the most sought after, experienced hairdressers and barbers. We focus on the latest in color, hair care and beard care. Our vision is to always make you as a customer satisfied after your visit.'
      salon.frontend_opts.about = 'Welcome to TechPlalace Salon! We believe in creativity, to see who you are and listen to who you want to be. From that we create your look. We are a strong team in constant development working towards one and the same goal; to give you a personalized overall experience! We take time for our customers, offer careful consultations and tailor-made treatments. Getting to us should at the same time feel relaxing and exclusive. exclusive product line that takes care of the quality of the hair through high quality raw materials and gives expressive style through its exceptional styling ability.'
      salon.frontend_opts.gallery_description = 'When it comes to hair, we work with, among other things, high quality products, a hair series that does not feel in the hair, but shapes and keeps the hair in place, while providing an incredibly nice shine and luster.'

      const config = {headers: {'x-access-token': state.token}}

      const res = await axios.post('/salon', salon, config)
      const createdSalon = res.data.salon

      console.log(createdSalon)
      localStorage.setItem('salon', createdSalon)
      commit('updateSalon', createdSalon)
      dispatch('getSalon', createdSalon.salon_id)
    },
    async updateSalon({commit, state}, salon) {
      const config = {headers: {'x-access-token': state.token}}
      await axios.put('/salon', salon, config)
    },
    async getSalonPublic({state, commit}, id) {
      const res = await axios.get(`/salon/public?salon_id=${id}`)
      console.log(res)
    },
    async getSalon({commit, state}, id) {
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
      const products = state.products.filter(product => product.id !== id)
      commit('updateProducts', products)
    },
    updateStaff({commit, state}, id) {
      const staff = state.staff.filter(member => member.id !== id)
      commit('updateStaff', staff)
    },
    updatePricingList({commit, state}, id) {
      const pricingList = state.pricingList.filter(block => block.id !== id)
      commit('updatePricingList', pricingList)
    }
  },
  getters: {
    products(state) {
      return state.products
    },
    gallery(state) {
      return state.gallery
    },
    pricingList(state) {
      return state.pricingList
    },
    staff(state) {
      return state.staff
    },
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