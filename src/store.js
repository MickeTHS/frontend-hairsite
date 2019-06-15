import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuth: false,
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
        name: 'Helena',
        title: 'Hairdresser',
        imageURL: '/img/staff-1.jpg',
        social: [
          {
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
        name: 'Micheal',
        title: 'Makeup Artist',
        imageURL: '/img/staff-2.jpg',
        social: [
          {
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
        name: 'Sarah',
        title: 'Nail Expert',
        imageURL: '/img/staff-3.jpg',
        social: [
          {
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
        name: 'Barbara',
        title: 'Style Expert',
        imageURL: '/img/staff-4.jpg',
        social: [
          {
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
      social: [
        {
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
    }
  },
  mutations: {

  },
  actions: {

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
    salon(state){
      return state.salon
    }
  }
})