<template>
  <section class="products" id="products" :style="{background: salon.frontend_opts.theme.sections[4].background}">
    <div class="container">
      <h2 :style="{color: salon.frontend_opts.theme.sections[4].text.heading}">Our Pricing</h2>
      <div class="grid">
        <i class="material-icons add" v-if="allowEdit" :style="{background: salon.frontend_opts.theme.primary}" @click="$emit('addProducts')">add</i>
        <div class="col" v-for="(block, i) in salon.products" :key="i">
          <i class="material-icons delete" v-if="allowEdit" @click="$emit('deleteBlock', block.id)">delete</i>
          <h3 :style="{color: salon.frontend_opts.theme.sections[4].text.heading}">{{ block.title }}</h3>
          <ul>
            <li v-for="(service, j) in block.services" :key="j">
              <span :style="{background: salon.frontend_opts.theme.sections[4].background, color: salon.frontend_opts.theme.sections[4].text.body}">{{ service.title }}</span>
              <span :style="{color: salon.frontend_opts.theme.primary, background: salon.frontend_opts.theme.sections[4].background}">{{ service.price }} SEK</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['salon', 'allowEdit'],
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
    justify-content: flex-start;
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
