<template>
  <main class="signup">
    <div class="container">
      <h1>Sign Up</h1>
      <p>
        Already have an account?
        <router-link to="/login" tag="a">Login</router-link>
      </p>
      <div class="signup-area">
        <div class="email-login">
          <form action>
            <input type="email" placeholder="Enter Your Email">
            <input type="password" placeholder="Choose a Password">
            <input type="password" placeholder="Confirm Your Password">
            <div class="controls">
              <div class="cbx">
                <input type="checkbox" name id="remember-me">
                <label for="remember-me">I accept terms of use.</label>
              </div>
            </div>
            <button class="btn">Sign Up</button>
          </form>
        </div>
        <div class="social-media-login">
          <div class="social-button facebook">
            <div class="icon">
              <img src="img/facebook.svg" alt>
            </div>
            <span>Login with Facebook</span>
          </div>
          <div class="social-button google">
            <div class="icon">
              <img src="img/google.svg" alt>
            </div>
            <span>Login with Google</span>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss">
@import '@/assets/scss/_variables.scss';
.signup {
  background: $primaryColor;
  margin-top: 0;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;

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
    }

    .signup-area {
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
        width: 130px;
        padding: 13px 20px;
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

        .email-login {
          padding-right: 0;

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

