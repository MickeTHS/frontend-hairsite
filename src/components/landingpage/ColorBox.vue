<template>
  <div class="colorbox">
    <div class="colorbox-toggle" @click="dialog.open = true" :style="{background: salon.frontend_opts.theme.primary}">
      <i class="material-icons settings">settings</i>
    </div>
    <div class="dialog" :class="dialog.open ? 'open': ''">
      <header :style="{background: salon.frontend_opts.theme.primary}">
        <div class="container">
          <h2>Update Theme</h2>
          <div class="controls">
            <button class="btn" @click="updateTheme">Save</button>
            <button class="btn" @click="dialog.open = false">Close</button>
          </div>
        </div>
      </header>
      <div class="content">
        <div class="theme-preview">
          <h3>Sections Backgrounds:</h3>
          <ul>
            <li>
              About:
              <input type="color" v-model="sectionsBackgrounds[0]" />
            </li>
            <li>
              Opening Hours:
              <input type="color" v-model="sectionsBackgrounds[1]" />
            </li>
            <li>
              Our Gallery:
              <input type="color" v-model="sectionsBackgrounds[2]" />
            </li>
            <li>
              Staff:
              <input type="color" v-model="sectionsBackgrounds[3]" />
            </li>
            <li>
              Pricing:
              <input type="color" v-model="sectionsBackgrounds[4]" />
            </li>
            <li>
              Contact:
              <input type="color" v-model="sectionsBackgrounds[5]" />
            </li>
          </ul>
          <h3>Themes:</h3>
          <ul class="themes">
            <li
              v-for="(theme, index) in themes"
              :key="index"
              :style="{background: theme.color}"
              @click="currentTheme = index + 1"
            ></li>
          </ul>
          <img :src="'/img/theme' + currentTheme +'.jpg'" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['salon', 'theme'],
  data() {
    return {
      themes: [
        { id: 1, color: "#8bc34a" },
        { id: 2, color: "#4caf50" },
        { id: 3, color: "#2196f3" },
        { id: 4, color: "#673ab7" },
        { id: 5, color: "#9c27b0" },
        { id: 6, color: "#f44336" }
      ],
      currentTheme: 1,
      sectionsBackgrounds: [],
      dialog: {
        open: false
      },
      notifications: false,
      sound: true,
      widgets: false
    };
  },
  methods: {
    async updateTheme() {
      const theme = this.themes[this.currentTheme - 1].color
      const salon = {
        frontend_opts: {
          theme: {
            primary: theme,
            sectionsBackgrounds: this.sectionsBackgrounds,
          },
          heading: this.salon.frontend_opts.heading,
          sub_heading: this.salon.frontend_opts.sub_heading,
          about: this.salon.frontend_opts.about,
          gallery_description: this.salon.frontend_opts.gallery_description,
          logo: this.salon.frontend_opts.logo,
          hasDomain: this.salon.frontend_opts.hasDomain,
          createDomain: this.salon.frontend_opts.createDomain,
          existingDomain: this.salon.frontend_opts.existingDomain,
          desiredDomain: this.salon.frontend_opts.desiredDomain
        }
      };
      await this.$store.dispatch("updateSalon", salon);
      await this.$store.dispatch("getSalon");
      this.dialog.open = false
    }
  },
  mounted() {
    this.sectionsBackgrounds = this.salon.frontend_opts.theme.sectionsBackgrounds
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
.colorbox {
  .colorbox-toggle {
    position: fixed;
    top: calc(50% - 44px);
    left: 0;
    background-color: #8bc34a;
    height: 32px;
    width: 32px;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    cursor: pointer;
    .settings {
      font-size: 16px;
    }
  }
  .dialog {
    background-color: #fff;
    display: none;
    &.open {
      display: block;
    }
    header {
      padding: 10px 0;
      background-color: #8bc34a;
      .container {
        padding: 16px 32px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      h2 {
        color: #fff;
        text-transform: uppercase;
        font-size: 15px;
        letter-spacing: 1px;
      }
      .btn {
        background-color: rgba(255, 255, 255, 0.2);
        padding: 10px 20px;
        text-transform: uppercase;
        font-size: 12px;
        font-weight: bold;
        letter-spacing: 1px;
        margin-left: 10px;
      }
    }
  }
  .themes {
    margin-bottom: 20px;
    li {
      width: 20px;
      height: 20px;
      display: inline-block;
      cursor: pointer;
      &:not(:last-child) {
        margin-right: 5px;
      }
    }
  }
  .theme-preview {
    padding: 20px 60px;
    h3 {
      text-transform: uppercase;
      font-size: 14px;
      margin-bottom: 8px;
      margin-top: 20px;
      color: #777;
    }
    p {
      font-weight: 400;
      color: #607d8b;
      margin: 20px 0;
    }
    img {
      width: 420px;
      max-width: 100%;
    }
    li {
      line-height: 1.8;
    }
  }
}
</style>

