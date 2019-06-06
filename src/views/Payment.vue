<template>
  <main class="payment">
    <div class="container">
      <div class="card">
        <div class="tabs">
          <div class="tab paypal">
            <input
              type="radio"
              name="payment-method"
              id="paypal"
              value="paypal"
              v-model="paymentMethod"
            >
            <label for="paypal" class="tab-label">
              <img src="img/paypal.svg" alt="paypal">
            </label>
            <div class="content" v-if="paymentMethod === 'paypal'">
              <form action>
                <div class="form-control">
                  <label for="card-numer">Paypal Email Address</label>
                  <input
                    type="email"
                    id="paypal-email-address"
                    placeholder="e.g salon@techpalace.com"
                  >
                </div>
              </form>
              <button class="btn">Proceed</button>
            </div>
          </div>
          <div class="tab credit-card">
            <input
              type="radio"
              name="payment-method"
              id="credit-card"
              value="creditCard"
              v-model="paymentMethod"
            >
            <label for="credit-card" class="tab-label">Credit Card</label>
            <div class="content" v-if="paymentMethod === 'creditCard'">
              <form action>
                <div class="form-control">
                  <label for="card-numer">Card Number</label>
                  <input
                    type="text"
                    class="lph"
                    id="card-number"
                    placeholder="****  ****  **** ****"
                  >
                </div>
                <div class="form-control">
                  <label for="card-holder">Card Holder</label>
                  <input type="text" id="card-holder" placeholder="e.g John Doe">
                </div>
                <div class="form-control exp-date">
                  <label for="exp-date">Exp. Date</label>
                  <input type="text" id="exp-date" placeholder="e.g 05/20">
                </div>
                <div class="form-control cvc">
                  <label for="cvc">CVC</label>
                  <input type="text" id="cvc" placeholder="e.g 785">
                </div>
              </form>
              <button class="btn">Proceed</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      paymentMethod: "creditCard"
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
.payment {
  background: $primaryColor;
  height: 100vh;
  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .card {
      background-color: #fff;
      width: 650px;
      margin: 0 auto;

      .tabs {
        margin-bottom: 15px;

        .tab {
          padding: 20px 30px;

          &:not(:last-child) {
            border-bottom: 1px solid #e5e5e5;
          }

          .tab-label {
            color: #525c74;
            font-size: 18px;
            font-weight: 700;
            display: inline-block;
            margin-left: 10px;
            text-transform: none;

            img {
              height: 24px;
              vertical-align: middle;
            }
          }

          form {
            display: flex;
            flex-wrap: wrap;

            .form-control {
              margin-right: 10px;

              &:first-child {
                width: 550px;
                margin-top: 20px;

                input {
                  &.lph::placeholder {
                    font-size: 18px;
                    line-height: 1;
                    position: relative;
                    top: 5px;
                    letter-spacing: 1px;
                  }
                }
              }

              &:nth-child(2) {
                width: 296px;
              }

              &.exp-date,
              &.cvc {
                width: 117px;
              }

              label {
                display: block;
                margin: 10px;
                text-transform: uppercase;
                font-size: 13px;
                font-weight: 700;
              }

              input[type="text"],
              input[type="email"] {
                background-color: #f7f7f7;
                color: #aaa;
                margin-bottom: 15px;
                width: 100%;
                height: 44px;

                &::placeholder {
                  color: #aaa;
                }
              }
            }
          }

          button {
            font-size: 13px;
            text-transform: uppercase;
            font-weight: 700;
            padding: 13px 27px;
            margin-top: 10px;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .payment {
    .container {
      .card {
        width: 100%;
      }
    }
  }
}

@media (max-width: 450px) {
  .payment {
    .container {
      .card {
        .tabs {
          .tab {
            form {
              .form-control {
                &:first-child,
                &:nth-child(2) {
                  width: 100%;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>

