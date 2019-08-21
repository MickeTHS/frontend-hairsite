<template>
  <v-app>
    <div id="app">
      <Navbar v-if="this.$route.path.split('/')[1] !== 'site' && this.$route.path !== '/admin'" />
      <LandingPageNavbar
        v-if="this.$route.path.split('/')[1] === 'site' || this.$route.path === '/admin'"
      />
      <router-view />
      <v-snackbar
        v-model="snackbar.open"
        :color="snackbar.success ? 'success' : 'error'"
        :right="true"
        :top="true"
        :timeout="5000"
      >{{ snackbar.message }}</v-snackbar>
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/components/shared/Navbar"
import LandingPageNavbar from "@/components/landingpage/Navbar"
export default {
  components: {
    Navbar,
    LandingPageNavbar
  },
  methods: {
    signup() {
      this.$store.dispatch("signup", {
        email: this.email,
        password: this.password
      });
    }
  },
  computed: {
    snackbar() {
      return this.$store.getters.snackbar
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Roboto", sans-serif;
  overflow-x: hidden;
}
.application--wrap {
  display: block !important;
}
section {
  padding: 60px 0;
  background: #fff;
  position: relative;
  z-index: 1;
  .container {
    max-width: 1440px !important;
  }
  h2 {
    text-align: center;
    font-size: 32px;
    color: #777;
    margin-bottom: 40px;
    font-weight: 500;
  }
  p {
    line-height: 1.8;
  }
  li {
    line-height: 1.5;
  }
  .grid {
    display: flex;
    justify-content: space-between;
    .col {
      padding: 10px;
      flex-grow: 1;
    }
  }
}
p,
li,
label,
a {
  font-size: 15px;
  color: #777;
}
p,
li {
  font-weight: 300;
}
a {
  font-weight: normal;
}
ol,
ul {
  padding-left: 0 !important;
}
li {
  list-style-type: none;
}
a {
  text-decoration: none;
}
input {
  outline: none;
}
input::placeholder {
  color: #fff;
}
input[type="text"],
input[type="email"],
input[type="tel"],
input[type="password"] {
  border: none;
  background-color: rgba(0, 0, 0, 0.08);
  color: #fff;
  font-size: 14px;
  padding: 12px 24px;
  border-radius: 23px;
}
input:-internal-autofill-selected {
  background-color: rgba(0, 0, 0, 0.08) !important;
  color: #fff !important;
}
.btn {
  border: none;
  border-radius: 30px;
  background-color: #5ec0ea;
  color: #fff;
  padding: 10px 20px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  &:not(.btn-circle) {
    .arrow {
      font-size: 16px;
      vertical-align: middle;
      position: relative;
      bottom: 2px;
      margin-left: 4px;
    }
  }
}
.container {
  padding: 0 80px !important;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
}
.v-dialog .v-list {
  padding: 24px;
}
.material-icons.edit,
.material-icons.add,
.material-icons.delete {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  font-size: 16px;
  height: 30px;
  width: 30px;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
.material-icons.edit,
.material-icons.add {
  color: rgba(255, 255, 255, 0.9);
  background: #8bc34a;
  right: -10px;
}
.material-icons.add {
  top: -40px;
}
.material-icons.delete {
  color: #f44336;
  background: rgba(244, 67, 54, 0.3);
}

input[type="color"] {
  -webkit-appearance: none;
  border: none;
  width: 20px;
  height: 20px;
  vertical-align: middle;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  border: 1px solid #eee;
  &::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  &::-webkit-color-swatch {
    border: none;
  }
}

@media (min-width: 960px) {
  .container {
    max-width: unset !important;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 0 40px !important;
  }
}

@media (max-width: 450px) {
  .container {
    padding: 0 30px !important;
  }
}
</style>