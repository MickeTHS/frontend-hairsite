<template>
  <div>
    <nav class="landing">
      <div class="container">
        <div class="brand">
          <router-link to="/" tag="a" :style="{color: salon.frontend_opts.theme.primary}">
            <img v-if="salon.frontend_opts.logo" :src="salon.frontend_opts.logo"/>
            <span v-else>{{ salon ? salon.name : 'Logo' }}</span>
          </router-link>
          <i
            class="material-icons edit"
            v-if="$route.path === '/admin'"
            @click="dialog.open = true"
            :style="{background: salon.frontend_opts.theme.primary}"
          >edit</i>
        </div>
        <ul class="top-menu">
          <li>
            <a href="#home" v-smooth-scroll>Home</a>
          </li>
          <li>
            <a href="#about" v-smooth-scroll>About</a>
          </li>
          <li>
            <a href="#gallery" v-smooth-scroll>Gallery</a>
          </li>
          <li>
            <a href="#staff" v-smooth-scroll>Staff</a>
          </li>
          <li>
            <a href="#products" v-smooth-scroll>Services</a>
          </li>
          <li>
            <a href="#contact" v-smooth-scroll>Contact</a>
          </li>
        </ul>
        <ul class="account">
          <router-link to="/login" tag="li" v-if="!isAuth">Login</router-link>
          <li
            v-if="isAuth && ($route.path === '/admin')"
            @click="$router.push('/landingpage')"
          >View website</li>
          <li
            v-if="isAuth && ($route.path === '/admin')"
            @click="$router.push('/wizard')"
          >Create Salon</li>
          <li v-if="isAuth && ($route.path === '/admin')" @click="logout">Logout</li>
        </ul>
        <div class="collapse" id="collapse" @click="sidebar = true">
          <span
            v-for="(item, index) in 4"
            :key="index"
            :style="{background: salon.frontend_opts.theme.primary}"
          ></span>
        </div>
      </div>
    </nav>
    <div class="sidebar" :class="sidebar ? 'open': ''" v-click-outside="closeSidebar">
      <ul class="top-menu" v-if="salon">
        <li :class="`theme${salon.frontend_opts.theme}`">
          <a href="#home" v-smooth-scroll>Home</a>
        </li>
        <li :class="`theme${salon.frontend_opts.theme}`">
          <a href="#about" v-smooth-scroll>About</a>
        </li>
        <li :class="`theme${salon.frontend_opts.theme}`">
          <a href="#gallery" v-smooth-scroll>Gallery</a>
        </li>
        <li :class="`theme${salon.frontend_opts.theme}`">
          <a href="#staff" v-smooth-scroll>Staff</a>
        </li>
        <li :class="`theme${salon.frontend_opts.theme}`">
          <a href="#products" v-smooth-scroll>Services</a>
        </li>
        <li :class="`theme${salon.frontend_opts.theme}`">
          <a href="#contact" v-smooth-scroll>Contact</a>
        </li>
        <router-link to="/login" tag="li" v-if="!isAuth">Login</router-link>
        <li
          v-if="isAuth && ($route.path !== '/landingpage')"
          :class="`theme${salon.frontend_opts.theme}`"
          @click="$router.push('/landingpage')"
        >View website</li>
        <li
          v-if="isAuth && ($route.path !== '/landingpage')"
          :class="`theme${salon.frontend_opts.theme}`"
          @click="$router.push('/wizard')"
        >Create Salon</li>
        <li
          v-if="isAuth && ($route.path !== '/landingpage')"
          :class="`theme${salon.frontend_opts.theme}`"
          @click="logout"
        >Logout</li>
      </ul>
    </div>
    <div class="overlay" v-if="sidebar"></div>
    <div class="dialog" :class="dialog.open ? 'open' : ''">
      <div class="card">
        <header>
          <h2>Update Logo</h2>
        </header>
        <div class="content">
          <label for="logo">Choose your Logo</label>
          <input type="file" id="logo" @change="onFileSelected" />
          <button class="btn" @click="updateLogo">Save</button>
          <button class="btn" @click="dialog.open = false">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebar: false,
      themes: [
        "#8bc34a",
        "#4caf50",
        "#2196f3",
        "#673ab7",
        "#9c27b0",
        "#f44336"
      ],
      dialog: {
        open: false
      },
      selectedFile: null
    };
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
    closeSidebar() {
      this.sidebar = false;
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0]
    },
    async updateLogo() {
      const fd = new FormData()
      fd.append('logo', this.selectedFile)
      fd.append('gallery_id', this.salon.gallery.gallery_id)
      this.$store.dispatch('addLogo', fd)
    }
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    },
    salon() {
      return this.$store.getters.salon;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
nav.landing {
  .brand {
    color: $theme1;
    position: relative;
    .material-icons.edit {
      right: -32px;
      top: 0;
    }
  }

  .account {
    li {
      display: inline-block;
      margin: 0 10px;
      font-weight: 400;
      color: #999;
    }
  }

  ul {
    li {
      &.active {
        color: $theme1;
      }
    }
  }

  li {
    cursor: pointer;
  }

  .collapse {
    span {
      background-color: $theme1;
    }
  }
}
.sidebar {
  .top-menu {
    li {
      &.theme1:hover {
        background-color: #8bc34a;
      }
      &.theme2:hover {
        background-color: #4caf50;
      }
      &.theme3:hover {
        background-color: #2196f3;
      }
      &.theme4:hover {
        background-color: #673ab7;
      }
      &.theme5:hover {
        background-color: #9c27b0;
      }
      &.theme6:hover {
        background-color: #f44336;
      }
    }
  }
}
.dialog {
  .content {
    input[type="file"] {
      display: block;
      margin: 20px 0;
    }
  }
}
</style>
