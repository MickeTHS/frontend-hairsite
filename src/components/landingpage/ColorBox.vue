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
          <ul class="custom">
            <li>
              <h3>About Section</h3>
              Background:
              <input type="color" v-model="sections[0].background" />
              Heading:
              <input type="color" v-model="sections[0].text.heading" />
              Body:
              <input type="color" v-model="sections[0].text.body" />
            </li>
            <li>
              <h3>Opening Hours Section</h3>
              Background:
              <input type="color" v-model="sections[1].background" />
              Heading:
              <input type="color" v-model="sections[1].text.heading" />
              Body:
              <input type="color" v-model="sections[1].text.body" />
            </li>
            <li>
              <h3>Our Gallery Section</h3>
              Background:
              <input type="color" v-model="sections[2].background" />
              Heading:
              <input type="color" v-model="sections[2].text.heading" />
              Body:
              <input type="color" v-model="sections[2].text.body" />
            </li>
            <li>
              <h3>Staff Section</h3>
              Background:
              <input type="color" v-model="sections[3].background" />
              Heading:
              <input type="color" v-model="sections[3].text.heading" />
              Body:
              <input type="color" v-model="sections[3].text.body" />
            </li>
            <li>
              <h3>Pricing Section</h3>
              Background:
              <input type="color" v-model="sections[4].background" />
              Heading:
              <input type="color" v-model="sections[4].text.heading" />
              Body:
              <input type="color" v-model="sections[4].text.body" />
            </li>
            <li>
              <h3>Contact Section</h3>
              Background:
              <input type="color" v-model="sections[5].background" />
              Heading:
              <input type="color" v-model="sections[5].text.heading" />
              Body:
              <input type="color" v-model="sections[5].text.body" />
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
      sections: [
        {
          background: '#ffffff', 
          text: {
            heading: '#777777',
            body: '#777777'
          }
        },
        {
          background: '#ffffff', 
          text: {
            heading: '#777777',
            body: '#777777'
          }
        },
        {
          background: '#ffffff', 
          text: {
            heading: '#777777',
            body: '#777777'
          }
        },
        {
          background: '#ffffff', 
          text: {
            heading: '#777777',
            body: '#777777'
          }
        },
        {
          background: '#ffffff', 
          text: {
            heading: '#777777',
            body: '#777777'
          }
        },
        {
          background: '#ffffff', 
          text: {
            heading: '#777777',
            body: '#777777'
          }
        },
      ],
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
            sections: this.sections
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
    this.sections = this.salon.frontend_opts.theme.sections
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
    .custom {
      li {
        display: inline-block;
        width: 50%;
      }
    }
    input[type="color"]{
      margin-right: 24px;
    }
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

