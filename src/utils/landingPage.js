import Banner from "@/components/landingpage/Banner"
import About from "@/components/landingpage/About"
import OpeningHours from "@/components/landingpage/OpeningHours"
import Book from "@/components/landingpage/Book"
import Gallery from "@/components/landingpage/Gallery"
import Staff from "@/components/landingpage/Staff"
import PricingList from "@/components/landingpage/Pricing"
import Contact from "@/components/landingpage/Contact"
import Map from "@/components/landingpage/Map"
import Footer from "@/components/landingpage/Footer"

export const landingPage = {
  components: {
    Banner,
    About,
    OpeningHours,
    Book,
    PricingList,
    Gallery,
    Staff,
    Contact,
    Map,
    Footer
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