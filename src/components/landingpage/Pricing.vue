<template>
  <section class="pricing" id="pricing">
    <div class="container">
      <h2>Our Pricing</h2>
      <div class="grid">
        <i class="fas fa-plus" v-if="allowEdit"></i>
        <div class="col" v-for="(block, i) in pricingList" :key="i">
          <i class="fas fa-times" v-if="allowEdit"></i>
          <h3>{{ block.title }}</h3>
          <ul>
            <li v-for="(service, j) in block.services" :key="j">
              <span>{{ service.title }}</span>
              <span>{{ service.price }} SEK</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["pricingList", "allowEdit"]
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
.pricing {
  .grid {
    position: relative;
    .col {
      position: relative;
      h3 {
        margin-bottom: 10px;
        color: #444;
        font-style: italic;
      }
      ul {
        li {
          overflow: hidden;
          &:before {
            content: ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . ";
            float: left;
            width: 0;
            white-space: nowrap;
            color: #afafaf;
          }
          span {
            background-color: #fff;
            &:last-child {
              float: right;
              color: $theme1;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1200px) {
  .pricing {
    .grid {
      flex-wrap: wrap;
      justify-content: center;
      .col {
        width: 300px;
        flex-grow: 0;
      }
    }
  }
}
</style>
