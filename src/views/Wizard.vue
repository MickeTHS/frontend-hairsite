<template>
  <main class="wizard">
    <div class="container">
      <div class="box">
        <h1>Step {{ currentStep }}/{{ totalSteps }}</h1>
        <form action>
          <div class="step" v-if="currentStep === 1">
            <label for>What is your salon name?</label>
            <div class="input-group">
              <input type="text" v-model="salon.name" placeholder="e.g Tech Palace Salon">
              <button class="btn btn-circle" @click.prevent="nextStep">
                <span class="icon icon-arrow-right2"></span>
              </button>
            </div>
          </div>
          <div class="step" v-if="currentStep === 2">
            <label for>Where is your salon located?</label>
            <div class="input-group">
              <input
                type="text"
                v-model="salon.location"
                placeholder="e.g 213, Tree Top Lane Paoli PA"
              >
              <button class="btn btn-circle" @click.prevent="nextStep">
                <span class="icon icon-arrow-right2"></span>
              </button>
            </div>
          </div>
          <div class="step" v-if="currentStep === 3">
            <label for>Email Address</label>
            <input
              type="email"
              v-model="salon.email"
              placeholder="e.g contact@domain.com"
              autocomplete="nope"
            >
            <label for>Phone Number</label>
            <input
              type="tel"
              v-model="salon.phone"
              placeholder="e.g +1845 1451 125"
              autocomplete="nope"
            >
            <button class="btn" @click.prevent="nextStep">
              Next
              <span class="icon icon-arrow-right2"></span>
            </button>
          </div>
          <div class="step" v-if="currentStep === 4">
            <label for>Add features</label>
            <input
              type="text"
              v-model="salon.features"
              placeholder="e.g Booking feature on your website, SMS email alert..."
              autocomplete="nope"
            >
            <button class="btn" @click.prevent="nextStep">
              Next
              <span class="icon icon-arrow-right2"></span>
            </button>
          </div>
          <div class="step" v-if="currentStep === 5">
            <label for="theme">Color theme:</label>
            <div class="theme" id="theme">
              <span id="theme-1"></span>
              <span id="theme-2"></span>
              <span id="theme-3"></span>
              <span id="theme-4" class="active"></span>
              <span id="theme-5"></span>
              <span id="theme-6"></span>
              <span id="theme-7"></span>
              <span id="theme-8"></span>
            </div>
            <label for="logo">Business logo:</label>
            <input type="file" id="logo" name="logo" placeholder="Logo">
            <button class="btn" @click.prevent="nextStep">
              Submit
              <span class="icon icon-arrow-right2"></span>
            </button>
          </div>
          <div class="step" v-if="currentStep === 6">
            <div class="input-group">
              <label class="switch">
                <input type="checkbox" v-model="salon.hasDomain">
                <span class="slider"></span>
              </label>
              <p>Does your salon have a domain name?</p>
            </div>
            <div class="input-group" v-if="!salon.hasDomain">
              <label class="switch">
                <input type="checkbox" v-model="salon.createDomain">
                <span class="slider"></span>
              </label>
              <p>Would you like to create a domain?</p>
            </div>
            <div class="form-control" v-if="salon.hasDomain">
              <label for>What's the address to your salon website</label>
              <input type="text" placeholder="e.g https://www.awesomesalon.com/">
            </div>
            <div class="form-control" v-if="salon.createDomain && !salon.hasDomain">
              <label for>Enter desired domain name</label>
              <input type="text" placeholder="e.g awesomesalon.com">
            </div>
            <button class="btn" @click.prevent="submit">
              Submit
              <span class="icon icon-arrow-right2"></span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      totalSteps: 6,
      currentStep: 1,
      salon: {
        name: null,
        location: null,
        email: null,
        phone: null,
        features: [],
        theme: null,
        logo: null,
        hasDomain: false,
        createDomain: false,
        domain: null
      }
    };
  },
  methods: {
    nextStep() {
      this.currentStep++;
    },
    submit() {
      console.log("Submiting form..");
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
.wizard {
  background-color: $primaryColor;
  margin: 0;

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    .box {
      h1 {
        color: #fff;
        text-align: center;
        margin-bottom: 28px;
      }

      form {
        width: 480px;

        .step {
          // display: none;

          &:nth-child(3),
          &:nth-child(5),
          &:last-child {
            .btn {
              background-color: rgba(255, 255, 255, 0.15);
            }
          }

          &:last-child {
            .input-group {
              display: flex;
              align-items: center;
              margin-bottom: 15px;
              .switch {
                margin: 0;
              }
              p {
                color: #fff;
                margin-left: 16px;
              }
            }
          }

          .theme {
            background-color: #fff;
            padding: 10px;
            span {
              display: inline-block;
              height: 25px;
              width: 25px;
              cursor: pointer;
              &.active {
                transform: translateY(-3px);
                box-shadow: 0 5px 5px rgba(105, 105, 105, 0.2);
              }
              &:not(:last-child) {
                margin-right: 10px;
              }
              &:first-child {
                background-color: #f44336;
              }
              &:nth-child(2) {
                background-color: #8bc34a;
              }
              &:nth-child(3) {
                background-color: #4caf50;
              }
              &:nth-child(4) {
                background-color: $primaryColor;
              }
              &:nth-child(5) {
                background-color: #03a9f4;
              }
              &:nth-child(6) {
                background-color: #3f51b5;
              }
              &:nth-child(7) {
                background-color: #673ab7;
              }
              &:last-child {
                background-color: #9c27b0;
              }
            }
          }

          label {
            display: block;
            color: #fff;
            margin: 12px;
          }

          input {
            display: block;
            margin: 15px 0;
            width: 100%;
            color: rgba(255, 255, 255, 0.7);
            &[type="file"] {
              color: #fff;
            }
            &::placeholder {
              color: rgba(255, 255, 255, 0.7);
            }
            &.invalid {
              background-color: rgba(244, 67, 54, 0.3);
            }
          }

          .input-group {
            width: 100%;
            position: relative;
            height: 44px;

            .btn {
              background-color: rgba(255, 255, 255, 0.15);
            }

            .btn-circle {
              background-color: #fff;
              color: $primaryColor;
              height: 30px;
              width: 30px;
              position: absolute;
              right: 7px;
              top: 7px;
              border-radius: 50%;
              padding: 0;
              line-height: 32px;

              span {
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
}

.switch {
  position: relative;
  display: inline-block;
  width: 38px;
  height: 22px;

  input {
    opacity: 0;
    &:checked + .slider {
      // background: rgba(141, 141, 141, 0.3);
      background-color: #3bb340;
    }
    &:checked + .slider:before {
      -webkit-transform: translateX(16px);
      transform: translateX(16px);
    }
  }
  & + span {
    position: relative;
    bottom: 3px;
    position: relative;
    bottom: 5px;
    margin-left: 10px;
  }
  .slider {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    // background: rgba(0, 0, 0, 0.1);
    background-color: rgba(99, 99, 99, 0.17);
    border-radius: 30px;

    &:before {
      content: "";
      position: absolute;
      height: 16px;
      width: 16px;
      left: 3px;
      top: 3px;
      background: #fff;
      border-radius: 50%;
      -webkit-transition: 0.4s;
      transition: 0.4s;
    }
  }
}

@media (max-width: 576px) {
  .wizard {
    .container {
      .box {
        width: 100%;

        form {
          width: 100%;
          .input-group {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>

