<template>
  <main class="signup">
    <div class="container">
      <h1>Sign Up</h1>
      <p>
        Already have an account?
        <router-link to="/login" tag="a">Login</router-link>
      </p>
      <div class="signup-area">
        <div class="email-signup">
          <form>
            <input type="email" placeholder="Enter Your Email" v-model="email" />
            <input type="password" placeholder="Choose a Password" v-model="password" />
            <input type="password" placeholder="Confirm Your Password" />
            <div class="controls">
              <Checkbox :label="'I accept terms of use.'" v-model="acceptTermsOfUse" />
            </div>
            <button class="btn" @click.prevent="signup">Sign Up</button>
          </form>
        </div>
        <div class="social-media-signup">
          <div class="social-button facebook">
            <div class="icon">
              <img src="img/facebook.svg" alt />
            </div>
            <span>signup with Facebook</span>
          </div>
          <div class="social-button google">
            <div class="icon">
              <img src="img/google.svg" alt />
            </div>
            <span>signup with Google</span>
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
      acceptTermsOfUse: true
    };
  },
  components: {
    Checkbox
  },
  methods: {
    signup() {
      const authData = { email: this.email, password: this.password }
      this.$store.dispatch("signup", authData);
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
.signup {
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

    .signup-area {
      display: flex;
      margin: 0 auto;

      .email-signup {
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
  .signup {
    .container {
      .signup-area {
        display: block;

        .email-signup {
          padding-right: 0;
          flex-direction: unset;

          &::after {
            display: none;
          }
        }

        .social-media-signup {
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
  .signup {
    .container {
      .signup-area {
        width: 100%;
        form {
          width: 100%;
        }
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

