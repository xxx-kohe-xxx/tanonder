
<template>
  <div class="p-product-select">
    <h1 class="p-product-select__heading">
      頼む商品を選択する
    </h1>
    <ProductCard
      v-for="product in products"
      v-bind:key="product.id"
      v-bind:name="product.name"
      v-bind:price="product.price"
      class="p-product-select__product-card"
    />
    <div class="p-product-select__total-component">
      商品合計金額等
    </div>
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
      products: []
    }
  },
  watch: {
    $route: {
      async handler () {
        await this.asyncData()
        this.products = this.$store.state.product.products
      },
      immediate: true
    }
  },
  methods: {
    async asyncData () {
      await this.$store.dispatch('product/getProducts')
    }
  }
}
</script>
