<template>
  <v-app>
    <div id="app">
      <Navbar v-if="this.$route.path !== '/landingpage' && this.$route.path !== '/admin'"/>
      <LandingPageNavbar
        v-if="this.$route.path === '/landingpage' || this.$route.path === '/admin'"
      />
      <router-view/>
      <v-snackbar v-model="snackbar" color="error" :right="true" :top="true" :timeout="6000">
        Email already registred! Please login!
        <v-btn dark flat @click="hideSnackbar">Close</v-btn>
      </v-snackbar>
    </div>
  </v-app>
</template>

<script>
import Navbar from "@/components/shared/Navbar";
import LandingPageNavbar from "@/components/landingpage/Navbar";
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
    },
    showSnackbar() {
      this.$store.dispatch("showSnackbar");
    },
    hideSnackbar() {
      this.$store.dispatch("hideSnackbar");
    }
  },
  computed: {
    snackbar: {
      get() {
        return this.$store.getters.snackbar;
      },
      set(value) {
        this.$store.dispatch("showSnackbar");
      }
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
  h2 {
    text-align: center;
    font-size: 32px;
    color: $theme1;
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
  padding: 14px 28px;
  border-radius: 25px;
}
input:-internal-autofill-selected {
  background-color: rgba(0, 0, 0, 0.08) !important;
  color: #fff !important;
}
.btn {
  border: none;
  border-radius: 30px;
  background-color: $primaryColor;
  color: #fff;
  padding: 10px 20px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
}
.container {
  padding: 0 80px !important;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
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