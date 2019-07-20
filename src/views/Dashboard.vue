<template>
  <main v-if="salon">
    <ColorBox />
    <Banner :salon="salon" :allowEdit="true" @updateHeading="updateHeading" @updateSubHeading="updateSubHeading"/>
    <About :about="salon.frontend_opts.about" :allowEdit="true" @updateAbout="updateAbout" />
    <OpeningHours 
      :openingHours="salon.opening_hours" 
      :allowEdit="true" 
      @updateOpeningHours="updateOpeningHours"/>
    <Gallery
      :gallery="salon.gallery"
      :description="salon.frontend_opts.gallery_description"
      :allowEdit="true"
      @updateGalleryDescription="updateGalleryDescription"
    />
    <Staff :staff="salon.staff" :allowEdit="true" />
    <Products :products="salon.products" :allowEdit="true" />
    <Contact :salon="salon" />
    <Footer :name="salon.name" :social="salon.social" />
    <div class="dialog" :class="dialog.open ? 'open': ''">
      <div class="card">
        <header>
          <h2>{{ dialog.title }}</h2>
        </header>
        <div class="content">
          {{ salon.target }}
          <textarea v-if="dialog.target === 'heading'" v-model="heading" placeholder="Banner heading.."></textarea>
          <textarea v-if="dialog.target === 'subHeading'" v-model="sub_heading" placeholder="Banner Subheading.."></textarea>
          <textarea v-if="dialog.target === 'about'" v-model="about" placeholder="About us text.."></textarea>
          <textarea v-if="dialog.target === 'galleryDescription'" v-model="gallery_description" placeholder="Gallery section description.."></textarea>
          <input type="time" v-model="time">
          {{salon.opening_hours}}
          <ul v-if="dialog.target === 'openingHours'">
            <li v-for="(item, index) in salon.opening_hours" :key="index">
              <div>{{ item.day }}</div>
              <div>{{item.hours[0]}}</div>
              <div>{{item.hours[1]}}</div>
            </li>
          </ul>
        </div>
        <footer>
          <button class="btn" @click="saveFrontendOpts">Save</button>
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
      activeDay: {
        am: {
          from: null,
          to: null
        },
        pm: {
          from: null,
          to: null
        }
      }
    };
  },
  components: {
    ColorBox
  },
  methods: {
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
    async saveFrontendOpts() {
      const salon = {
        frontend_opts: {
          heading: this.heading ? this.heading : this.salon.frontend_opts.sub_heading,
          sub_heading: this.sub_heading ? this.sub_heading : this.salon.frontend_opts.sub_heading,
          about: this.about ? this.about : this.salon.frontend_opts.about,
          gallery_description: this.gallery_description ? this.gallery_description : this.salon.frontend_opts.gallery_description,
        }
      };
      try {
        const res = await this.$store.dispatch("updateSalon", salon);
        console.log(res);
        this.$store.dispatch('getSalon')
      } catch (e) {
        console.log(e);
      }
    }
  },
  computed: {
    salon() {
      return this.$store.getters.salon;
    }
  },
  watch: {
    salon(){
      console.log('salon: ', this.salon)
      this.heading = this.salon.frontend_opts.heading
      this.sub_heading = this.salon.frontend_opts.sub_heading
      this.about = this.salon.frontend_opts.about
      this.gallery_description = this.salon.frontend_opts.gallery_description
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
      ul {
        li {
          display: flex;
          line-height: 2;
          div {
            flex-basis: 33.3333%;
            &:first-child {
              font-weight: 400;
            }
          }
        }
      }
    }
    footer {
      padding: 0 32px 24px 32px;
      background-color: #fff;
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
  }
}
</style>


