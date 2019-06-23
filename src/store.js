import Vue from 'vue'
import Vuex from 'vuex'

import axios from '@/axios'
import router from './router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    userId: null,
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
    pricingList: [
      {
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
    staff: [
      {
        id: 1,
        name: 'Helena',
        title: 'Hairdresser',
        imageURL: '/img/staff-1.jpg',
        social: [{
            code: 'facebook-f',
            url: 'https://facebook.com/'
          },
          {
            code: 'twitter',
            url: 'https://twitter.com/'
          },
          {
            code: 'linkedin-in',
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
            code: 'facebook-f',
            url: 'https://facebook.com/'
          },
          {
            code: 'twitter',
            url: 'https://twitter.com/'
          },
          {
            code: 'linkedin-in',
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
            code: 'facebook-f',
            url: 'https://facebook.com/'
          },
          {
            code: 'twitter',
            url: 'https://twitter.com/'
          },
          {
            code: 'linkedin-in',
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
            code: 'facebook-f',
            url: 'https://facebook.com/'
          },
          {
            code: 'twitter',
            url: 'https://twitter.com/'
          },
          {
            code: 'linkedin-in',
            url: 'https://linkedin.com/'
          }
        ]
      },
    ],
    salon: {
      name: 'Tech Palace',
      address: 'California, 16440 - USA',
      coord: {
        lat: 27.1494174,
        lng: -13.2006577
      },
      phone: '+1 8751 2345 000',
      email: 'hello@techpalace.com',
      social: [{
          code: 'facebook-f',
          url: 'https://facebook.com/'
        },
        {
          code: 'twitter',
          url: 'https://twitter.com/'
        },
        {
          code: 'instagram',
          url: 'https://instagram.com/'
        },
        {
          code: 'linkedin-in',
          url: 'https://linkedin.com/'
        }
      ]
    },
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
    updatePricingList(state, list) {
      state.pricingList = list
    }
  },
  actions: {
    signup({
      commit
    }, authData) {

      const reqBody = {
        email: authData.email,
        password: authData.password
      }

      axios
        .post('/user/create', reqBody)
        .then(res => {
          router.push('/login')
        })
        .catch(err => {
          if (err.response.status === 400 && err) {
            commit('showSnackbar')
            setTimeout(() => {
              commit('hideSnackbar')
            }, 6000)
          }
        })
    },
    login({
      commit
    }, authData) {
      const reqBody = {
        email: authData.email,
        password: authData.password
      }

      axios
        .post('/user/login', reqBody)
        .then(res => {
          const token = res.data.token
          const userId = res.data.id

          commit('authUser', {
            token,
            userId
          })

          localStorage.setItem('token', token)
          localStorage.setItem('userId', userId)
          router.push('/admin')

          console.log(res)
        })
        .catch(err => console.log(err))
    },
    autoLogin({
      commit
    }) {
      const token = localStorage.getItem('token')
      const userId = localStorage.getItem('userId')

      if (!token) {
        return
      }
      commit('authUser', {
        token,
        userId
      })
    },
    logout({
      commit
    }) {
      commit('clearAuth')

      localStorage.removeItem('token')
      localStorage.removeItem('userId')

      router.replace('/login')
    },
    getUser({
      commit,
      state
    }) {
      const reqBody = {
        user_id: state.userId,
        headers: {
          'x-access-token': state.token
        }
      }

      axios
        .get('/user', reqBody)
        .then(res => {
          console.log(res)
        })
        .catch(err => console.log(err))
    },
    showSnackbar({
      commit
    }) {
      commit('showSnackbar')
    },
    hideSnackbar({
      commit
    }) {
      commit('hideSnackbar')
    },
    updateProducts({
      commit,
      state
    }, id) {
      const products = state.products.filter(product => product.id !== id)
      commit('updateProducts', products)
    },
    updateStaff({
      commit,
      state
    }, id) {
      const staff = state.staff.filter(member => member.id !== id)
      commit('updateStaff', staff)
    },
    updatePricingList({
      commit,
      state
    }, id) {
      const pricingList = state.pricingList.filter( block => block.id !== id)
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