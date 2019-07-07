<template>
  <section class="pricing" id="pricing">
    <div class="container">
      <h2>Our Pricing</h2>
      <div class="grid">
        <i class="fas fa-plus" v-if="allowEdit"></i>
        <div class="col" v-for="(block, i) in pricingList" :key="i">
          <i class="fas fa-times" v-if="allowEdit" @click="deleteBlock(block.id)"></i>
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
  props: ["pricingList", "allowEdit"],
  methods: {
    deleteBlock(id){
      this.$store.dispatch('updatePricingList', id)
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
.pricing {
  .grid {
    position: relative;
    flex-wrap: wrap;
    .col {
      position: relative;
      flex-basis: 25%;
      flex-grow: 0;
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
      .col {
        flex-basis: 33.3333%;
      }
    }
  }
}
@media (max-width: 968px) {
  .pricing {
    .grid {
      .col {
        flex-basis: 50%;
      }
    }
  }
}
@media (max-width: 600px) {
  .pricing {
    .grid {
      .col {
        flex-basis: 100%;
      }
    }
  }
}
</style>
