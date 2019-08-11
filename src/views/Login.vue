<template>
  <main class="login">
    <div class="container">
      <h1>Login</h1>
      <p>
        Don’t have an account?
        <router-link to="/signup" tag="a">Sign Up</router-link>
      </p>
      <div class="login-area">
        <div class="email-login">
          <form action>
            <input type="email" placeholder="Enter Your Email" v-model="email" />
            <input type="password" placeholder="Enter Your Password" v-model="password" />
            <div class="controls">
              <Checkbox :label="'Remember me'" v-model="remember" />
              <a href>Forgot Password?</a>
            </div>
            <button class="btn" @click.prevent="login">Login</button>
          </form>
        </div>
        <div class="social-media-login">
          <div class="social-button facebook">
            <div class="icon">
              <img src="/img/facebook.svg" alt />
            </div>
            <span>Login with Facebook</span>
          </div>
          <div class="social-button google">
            <div class="icon">
              <img src="/img/google.svg" alt />
            </div>
            <span>Login with Google</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Checkbox from "@/components/Checkbox"
export default {
  data() {
    return {
      email: null,
      password: null,
      remember: true,
    };
  },
  components: {
    Checkbox
  },
  methods: {
    login() {
      const authData = { email: this.email, password: this.password }
      this.$store.dispatch("login", authData)
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
.login {
  background: $primaryColor;
  margin-top: 0;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 54px);
    margin-top: 54px;

    h1 {
      color: #fff;
    }

    p {
      color: #fff;
      margin: 15px 0;
    }

    label {
      color: #fff;
    }

    a {
      color: #2b7fa3;
      font-weight: normal;
    }

    .login-area {
      display: flex;
      margin: 0 auto;

      .email-login {
        position: relative;
        padding-right: 30px;

        &::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          display: block;
          width: 1px;
          height: 140px;
          background-color: rgba(0, 0, 0, 0.15);
        }
      }

      & > div {
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      input[type="email"],
      input[type="password"] {
        width: 360px;
        display: block;
        margin: 15px 0;
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px #57b1d8 inset !important;
          box-shadow: 0 0 0 30px #57b1d8 inset !important;
          -webkit-text-fill-color: #fff !important;
        }
      }

      .controls {
        width: 360px;
        display: flex;
        justify-content: space-between;
        margin: 15px 0;
      }

      .btn {
        background-color: rgba(0, 0, 0, 0.24);
        display: block;
        min-width: 108px;
        padding: 12px 24px;
      }

      .social-button {
        width: 260px;
        height: 44px;
        color: #fff;
        font-size: 15px;
        line-height: 44px;
        display: block;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        margin-top: 15px;
        margin-left: 30px;
        cursor: pointer;
        text-align: center;
        padding-left: 44px;

        &.facebook {
          background-color: #3b5998;

          .icon {
            img {
              width: 11px;
              margin-top: 11.75px;
            }
          }
        }

        &.google {
          background-color: #4285f4;

          .icon {
            img {
              width: 20px;
              margin-top: 12px;
            }
          }
        }

        .icon {
          width: 44px;
          height: 44px;
          position: absolute;
          left: 0;
          top: 0;
          text-align: center;
          background-color: #fff;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .login {
    .container {
      .login-area {
        display: block;

        .email-login {
          padding-right: 0;
          display: block;

          &::after {
            display: none;
          }
        }

        .social-media-login {
          margin-top: 30px;

          .social-button {
            margin: 8px 0;
          }
        }
      }
    }
  }
}

@media (max-width: 400px) {
  .login {
    .container {
      .login-area {
        width: 100%;
        input[type="email"],
        input[type="password"] {
          width: 100%;
        }

        .controls,
        .social-button {
          width: 100%;
        }

        .controls {
          display: block;
          text-align: left;

          .cbx {
            margin-bottom: 10px;
          }
        }

        .btn {
          width: 100%;
        }
      }
    }
  }
}
</style>

