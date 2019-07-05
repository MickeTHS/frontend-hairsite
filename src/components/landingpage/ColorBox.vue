<template>
  <div class="colorbox">
    <div class="colorbox-toggle" @click="dialog = !dialog">
      <i class="fas fa-cogs"></i>
    </div>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Open Dialog</v-btn>
      </template>
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark flat @click="updateTheme">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list three-line subheader>
          <v-subheader>Choose theme:</v-subheader>
          <v-list-tile avatar>
            <v-list-tile-content>
              <v-list-tile-title>How that works?</v-list-tile-title>
              <v-list-tile-sub-title>Choose one of the folllowing themes, then click save to apply the new theme!</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>

          <div class="theme-preview">
            <ul class="themes">
              <li
                v-for="(theme, index) in themes"
                :key="index"
                :style="{background: theme.color}"
                @click="currentTheme = index + 1"
              ></li>
            </ul>
            <img :src="'/img/theme' + currentTheme +'.jpg'" alt>
          </div>
        </v-list>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      themes: [
        { id: 1, color: "#bfd354" },
        { id: 2, color: "#8bc34a" },
        { id: 3, color: "#4caf50" },
        { id: 4, color: "#5ec0ea" },
        { id: 5, color: "#03a9f4" },
        { id: 6, color: "#3f51b5" },
        { id: 7, color: "#673ab7" },
        { id: 8, color: "#9c27b0" },
        { id: 9, color: "#f44336" }
      ],
      currentTheme: 1,
      dialog: false,
      notifications: false,
      sound: true,
      widgets: false
    };
  },
  methods: {
    updateTheme(){
      const theme = this.currentTheme
      const salon = {
        frontend_opts: {
          theme
        }
      }
      this.$store.dispatch('updateSalon', salon)
      console.log(salon)
      // dialog = false
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
.colorbox-toggle {
  position: fixed;
  top: calc(50% - 44px);
  left: 0;
  background-color: #8BC34A;
  height: 32px;
  width: 32px;
  z-index: 3;
  text-align: center;
  line-height: 32px;
  color: #607d8b;
  cursor: pointer;
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
  img {
    width: 420px;
    max-width: 100%;
  }
}
</style>

