<template>
  <div class="colorbox">
    <div class="colorbox-toggle" @click="dialog.open = true">
      <i class="material-icons settings">settings</i>
    </div>
    <div class="dialog" :class="dialog.open ? 'open': ''">
      <header>
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
          <p>Choose one of the following themes, then click save.</p>
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
  props: ['salon'],
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
      const theme = this.currentTheme;
      const salon = {
        frontend_opts: {
          theme: this.currentTheme,
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
    color: #607d8b;
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
    padding: 14px;
    p {
      font-weight: 400;
      color: #607d8b;
      margin: 20px 0;
    }
    img {
      width: 420px;
      max-width: 100%;
    }
  }
}
</style>

