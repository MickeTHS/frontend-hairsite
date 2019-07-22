import Banner from "@/components/landingpage/Banner"
import About from "@/components/landingpage/About"
import OpeningHours from "@/components/landingpage/OpeningHours"
import Gallery from "@/components/landingpage/Gallery"
import Staff from "@/components/landingpage/Staff"
import Products from "@/components/landingpage/Products"
import Contact from "@/components/landingpage/Contact"
import Footer from "@/components/landingpage/Footer"

export const landingPage = {
  data(){
    return {
      themes: ["#8bc34a", "#4caf50", "#2196f3", "#673ab7", "#9c27b0", "#f44336"]
    }
  },
  components: {
    Banner,
    About,
    OpeningHours,
    Products,
    Gallery,
    Staff,
    Contact,
    Footer
  }
}