import Banner from "@/components/landingpage/Banner"
import Product from "@/components/landingpage/Product"
import PricingList from "@/components/landingpage/Pricing"
import Staff from "@/components/landingpage/Staff"
import Contact from "@/components/landingpage/Contact"
import Map from "@/components/landingpage/Map"
import Footer from "@/components/landingpage/Footer"
import { Waterfall, WaterfallItem } from "vue2-waterfall"

export const landingPage = {
  components: {
    Banner,
    Product,
    PricingList,
    Staff,
    Contact,
    Map,
    Footer,
    Waterfall,
    WaterfallItem
  },
  computed: {
    salon(){
      return this.$store.getters.salon
    },
    products() {
      return this.$store.getters.products
    },
    gallery() {
      return this.$store.getters.gallery
    },
    pricingList(){
      return this.$store.getters.pricingList
    },
    staff(){
      return this.$store.getters.staff
    }
  }
}