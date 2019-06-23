<template>
  <section class="book" id="book">
    <div class="container">
      <h2>Book Now</h2>
      <div class="products">
        <div class="grid">
          <i class="fas fa-plus"></i>
          <Product v-for="product in products" :product="product" :key="product.id"/>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Product from "@/components/landingpage/Product";
export default {
  props: ["products"],
  components: {
    Product
  }
};
</script>

<style lang="scss">
.book {
  .products {
    padding-top: 20px;
    position: relative;
    .grid {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
}
</style>

