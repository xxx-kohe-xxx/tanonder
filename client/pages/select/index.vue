<template>
  <div class="container">
    <ProductCard
      v-for="product in products"
      v-bind:key="product.id"
      v-bind:name="product.name"
      v-bind:price="product.price"
    />
  </div>
</template>

<script>
import ProductCard from '~/components/ProductCard.vue'
export default {
  components: {
    ProductCard
  },
  data () {
    return {
      products: [
        { id: 1, name: 'まぐろ', price: 100 },
        { id: 2, name: 'ローストビーフ カルパッチョ', price: 100 },
        { id: 3, name: 'まぐろはらみ', price: 100 }
      ]
    }
  }
}
</script>
