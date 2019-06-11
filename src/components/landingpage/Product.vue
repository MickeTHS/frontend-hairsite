<template>
  <div class="product">
    <div class="product-img" :style="{background: 'url(' + product.imageUrl + ')'}"></div>
    <p>{{ product.name }}</p>
  </div>
</template>

<script>
export default {
  props: ["product"]
};
</script>

<style lang="scss">
.product {
  width: 120px;
  margin: 5px;
  .product-img {
    width: 100%;
    height: 120px;
    border-radius: 50%;
    background-size: cover !important;
  }
  p {
    text-align: center;
    margin: 10px 0;
  }
}
</style>

