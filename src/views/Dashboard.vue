<template>
  <main v-if="salon">
    <ColorBox :salon="salon" :theme="themes[salon.frontend_opts.theme - 1]" />
    <Banner
      :salon="salon"
      :allowEdit="true"
      :theme="themes[salon.frontend_opts.theme - 1]"
      @updateHeading="updateHeading"
      @updateSubHeading="updateSubHeading"
    />
    <About
      :about="salon.frontend_opts.about"
      :allowEdit="true"
      :theme="themes[salon.frontend_opts.theme - 1]"
      @updateAbout="updateAbout"
    />
    <OpeningHours
      :openingHours="salon.opening_hours"
      :allowEdit="true"
      :theme="themes[salon.frontend_opts.theme - 1]"
      @updateOpeningHours="updateOpeningHours"
    />
    <Gallery
      :gallery="salon.gallery"
      :description="salon.frontend_opts.gallery_description"
      :allowEdit="true"
      :theme="themes[salon.frontend_opts.theme - 1]"
      @updateGalleryDescription="updateGalleryDescription"
    />
    <Staff
      :staff="salon.staff"
      :allowEdit="true"
      :theme="themes[salon.frontend_opts.theme - 1]"
      @addStaff="addStaff"
    />
    <Products
      :products="salon.products"
      :allowEdit="true"
      :theme="themes[salon.frontend_opts.theme - 1]"
      @addProducts="addProducts"
      @deleteBlock="deleteProductsBlock"
    />
    <Contact :salon="salon" :theme="themes[salon.frontend_opts.theme - 1]" />
    <Footer :name="salon.name" :social="salon.social" />
    <div class="dialog" :class="dialog.open ? 'open': ''">
      <div class="card">
        <header>
          <h2>{{ dialog.title }}</h2>
        </header>
        <div class="content">
          {{ salon.target }}
          <textarea
            v-if="dialog.target === 'heading'"
            v-model="heading"
            placeholder="Banner heading.."
          ></textarea>
          <textarea
            v-if="dialog.target === 'subHeading'"
            v-model="sub_heading"
            placeholder="Banner Subheading.."
          ></textarea>
          <textarea v-if="dialog.target === 'about'" v-model="about" placeholder="About us text.."></textarea>
          <textarea
            v-if="dialog.target === 'galleryDescription'"
            v-model="gallery_description"
            placeholder="Gallery section description.."
          ></textarea>
          <ul v-if="dialog.target === 'openingHours'">
            <li>
              <div></div>
              <div>AM</div>
              <div>PM</div>
            </li>
            <li v-for="(item, index) in salon.opening_hours" :key="index">
              <div>{{item.day}}</div>
              <div>
                <input type="time" v-model="opening_hours[index].hours[0]" />
                <input type="time" v-model="opening_hours[index].hours[1]" />
              </div>
              <div>
                <input type="time" v-model="opening_hours[index].hours[2]" />
                <input type="time" v-model="opening_hours[index].hours[3]" />
              </div>
            </li>
          </ul>
          <div v-if="dialog.target === 'addProducts'">
            <input type="text" placeholder="Block Title" v-model="block.title" />
            <div class="product">
              <input
                type="text"
                id="productTitle"
                placeholder="Product Name"
                v-model="product.title"
              />
              <input
                type="number"
                id="productPrice"
                placeholder="Product Price"
                v-model="product.price"
              />
              <button class="btn" @click="addProduct">Add</button>
            </div>
            <ul>
              <li
                v-for="(product, index) in block.services"
                :key="index"
              >{{ product.title }} - {{ product.price }}</li>
            </ul>
          </div>
          <div v-if="dialog.target === 'addStaff'">
            <!-- <label for="logo"></label> -->
            <!-- <input type="file" id="logo" @change="onFileSelected" /> -->
            <div class="form-control">
              <label for="firstname">First Name:</label>
              <input
                type="text"
                id="firstname"
                v-model="staff.firstname"
                placeholder="Staff First Name"
              />
            </div>
            <div class="form-control">
              <label for="lastname">Last Name:</label>
              <input
                type="text"
                id="lastname"
                v-model="staff.lastname"
                placeholder="Staff Last Name"
              />
            </div>
            <div class="form-control">
              <label for="email">Email</label>
              <input type="text" id="email" v-model="staff.email" placeholder="Staff Email" />
            </div>
            <div class="form-control">
              <label for="phone">Phone</label>
              <input type="text" id="phone" v-model="staff.phone" placeholder="Staff Phone" />
            </div>
          </div>
        </div>
        <footer>
          <button
            v-if="dialog.target !== 'openingHours' 
              && dialog.target !== 'addProducts'
              && dialog.target !== 'addStaff'"
            class="btn"
            @click="saveFrontendOpts"
          >Save</button>
          <button v-if="dialog.target === 'openingHours'" class="btn" @click="saveOpeningHours">Save</button>
          <button v-if="dialog.target === 'addProducts'" class="btn" @click="saveProducts">Save</button>
          <button v-if="dialog.target === 'addStaff'" class="btn" @click="saveStaff">Save</button>
          <button class="btn btn-error" @click="dialog.open = false">Close</button>
        </footer>
      </div>
    </div>
  </main>
</template>

<script>
import { landingPage } from "@/utils/landingPage.js";
import ColorBox from "@/components/landingpage/ColorBox";
export default {
  mixins: [landingPage],
  data() {
    return {
      dialog: {
        open: false,
        title: null,
        target: null
      },
      heading: null,
      sub_heading: null,
      about: null,
      gallery_description: null,
      opening_hours: [],
      product: {
        title: null,
        price: null
      },
      block: {
        id: null,
        title: null,
        services: []
      },
      selectedFile: null,
      staff: {
        firstname: null,
        lastname: null,
        email: null,
        phone: null
      }
    };
  },
  components: {
    ColorBox
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
    },
    updateHeading() {
      this.dialog.title = "Update Heading";
      this.dialog.target = "heading";
      this.dialog.open = true;
    },
    updateSubHeading() {
      this.dialog.title = "Update Sub Heading";
      this.dialog.target = "subHeading";
      this.dialog.open = true;
    },
    updateAbout() {
      this.dialog.title = "Update About Us";
      this.dialog.target = "about";
      this.dialog.open = true;
    },
    updateGalleryDescription() {
      this.dialog.title = "Update Gallery Description";
      this.dialog.target = "galleryDescription";
      this.dialog.open = true;
    },
    updateOpeningHours() {
      this.dialog.title = "Update Opening Hours";
      this.dialog.target = "openingHours";
      this.dialog.open = true;
    },
    addProducts() {
      this.dialog.title = "Add Products Block";
      this.dialog.target = "addProducts";
      this.dialog.open = true;
    },
    addProduct() {
      const product = {
        title: this.product.title,
        price: this.product.price
      }
      if (!this.product.title.length || !this.product.title.length) return
      this.block.services.push(product)
    },
    addStaff() {
      this.dialog.title = "Add Staff";
      this.dialog.target = "addStaff";
      this.dialog.open = true;
    },
    saveStaff() {
      const staff = {
        salon_id: this.salon.salon_id,
        firstname: this.staff.firstname,
        lastname: this.staff.lastname,
        email: this.staff.email,
        phone: this.staff.phone
      }
      const fd = new FormData()
      fd.append('salon_id', this.salon.salon_id)
      fd.append('firstname', this.staff.firstname)
      fd.append('lastname', this.staff.lastname)
      fd.append('email', this.staff.email)
      fd.append('phone', this.staff.phone)
      this.$store.dispatch('addStaff', fd)
    },
    async saveFrontendOpts() {
      const salon = {
        frontend_opts: {
          heading: this.heading
            ? this.heading
            : this.salon.frontend_opts.heading,
          sub_heading: this.sub_heading
            ? this.sub_heading
            : this.salon.frontend_opts.sub_heading,
          about: this.about ? this.about : this.salon.frontend_opts.about,
          gallery_description: this.gallery_description
            ? this.gallery_description
            : this.salon.frontend_opts.gallery_description,
          theme: this.salon.frontend_opts.theme,
          logo: this.salon.frontend_opts.logo,
          hasDomain: this.salon.frontend_opts.hasDomain,
          createDomain: this.salon.frontend_opts.createDomain,
          existingDomain: this.salon.frontend_opts.existingDomain,
          desiredDomain: this.salon.frontend_opts.desiredDomain
        }
      };
      try {
        const res = await this.$store.dispatch("updateSalon", salon);
        console.log(res);
        this.$store.dispatch("getSalon");
      } catch (e) {
        console.log(e);
      }
    },
    async saveOpeningHours() {
      const salon = {
        opening_hours: this.opening_hours
      };
      try {
        const res = await this.$store.dispatch("updateSalon", salon);
        console.log(res);
        this.$store.dispatch("getSalon");
      } catch (e) {
        console.log(e);
      }
    },
    async saveProducts() {
      console.log(this.block)
      const products = this.salon.products || []
      this.block.id = this.salon.products.length + 1, // the backend should later generate unique id
        products.push(this.block)
      console.log(products)
      const salon = { products }
      try {
        await this.$store.dispatch("updateSalon", salon)
        await this.$store.dispatch("getSalon");
        this.product.title = null
        this.product.price = null
        this.block.id = null
        this.block.title = null
        this.block.services = []
        this.dialog.open = false
      } catch (e) {
        console.log(e);
      }
    },
    async deleteProductsBlock(id) { // ###
      const products = this.salon.products.filter(product => product.id !== id)
      const salon = { products }
      try {
        await this.$store.dispatch("updateSalon", salon)
        await this.$store.dispatch("getSalon");
      } catch (e) {
        console.log(e);
      }
    },
  },
  computed: {
    salon() {
      return this.$store.getters.salon;
    }
  },
  watch: {
    salon() {
      console.log("salon: ", this.salon);
      this.heading = this.salon.frontend_opts.heading;
      this.sub_heading = this.salon.frontend_opts.sub_heading;
      this.about = this.salon.frontend_opts.about;
      this.gallery_description = this.salon.frontend_opts.gallery_description;
      this.opening_hours = this.salon.opening_hours;
    }
  },
  mounted() {
    this.$store.dispatch("getUser");
    this.$store.dispatch("getSalon");
  }
};
</script>

<style lang="scss">
.dialog {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100vw;
  background: rgba(0, 0, 0, 0.7);
  display: none;
  justify-content: center;
  align-items: center;
  z-index: 100;
  &.open {
    display: flex;
  }
  .card {
    background-color: #fff;
    width: 600px;
    max-width: 100%;
    min-height: 220px;
    margin: 20px;
    header {
      padding: 16px 32px;
      background-color: #fafafa;
      h2 {
        color: #8bc34a;
        font-size: 15px;
        text-transform: uppercase;
        letter-spacing: 0.25px;
      }
    }
    .content {
      padding: 24px 32px;
      textarea {
        border: 1px solid #eee;
        border-radius: 4px;
        padding: 14px 20px;
        width: 100%;
        height: 150px;
        resize: none;
        outline: none;
      }
      input[type="text"],
      input[type="number"] {
        border: 1px solid #e6e6e6;
        background-color: #fff;
        color: #666;
        padding: 10px 20px;
        margin-right: 10px;
        margin-bottom: 10px;
        border-radius: 4px;
        &::placeholder {
          color: #aaa;
          font-weight: 300;
        }
      }
      ul {
        li {
          display: flex;
          margin: 8px 0;
          position: relative;
          cursor: pointer;
          border-bottom: 1px solid #f5f5f5;
          cursor: pointer;
          &:hover {
            .material-icons.edit {
              opacity: 1;
            }
          }
          div {
            background-color: #fafafa;
            padding: 10px;
            &:first-child {
              flex-basis: 20%;
            }
            &:not(:first-child) {
              display: flex;
              justify-content: center;
              flex-basis: 40%;
            }
          }
          input[type="time"] {
            width: 92px;
            font-size: 14px;
          }
        }
      }
    }
    footer {
      padding: 0 32px 24px 32px;
      background-color: #fff;
    }
    button {
      padding: 10px 20px;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 1px;
      background-color: #8bc34a;
      border-radius: 4px;
      margin-right: 10px;
      &.btn-error {
        background-color: #f44336;
      }
    }
  }
  .form-control {
    display: inline-block;
    &:not(:last-child) {
      margin-bottom: 10px;
    }
    label {
      display: block;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.25px;
      margin-bottom: 6px;
      color: #bbb;
    }
  }
}
</style>


