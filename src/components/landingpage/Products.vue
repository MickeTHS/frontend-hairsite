<template>
  <section class="products" id="products">
    <div class="container">
      <h2>Our Pricing</h2>
      <div class="grid">
        <i class="material-icons add" v-if="allowEdit">add</i>
        <div class="col" v-for="(block, i) in products" :key="i">
          <i class="material-icons delete" v-if="allowEdit" @click="deleteBlock(block.id)">delete</i>
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
  props: ['products', 'allowEdit'],
  methods: {
    deleteBlock(id){
      this.$store.dispatch('updateProducts', id)
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";
.products {
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
  .products {
    .grid {
      .col {
        flex-basis: 33.3333%;
      }
    }
  }
}
@media (max-width: 968px) {
  .products {
    .grid {
      .col {
        flex-basis: 50%;
      }
    }
  }
}
@media (max-width: 600px) {
  .products {
    .grid {
      .col {
        flex-basis: 100%;
      }
    }
  }
}
</style>
