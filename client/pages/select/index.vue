
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
      v-on:total="total"
      class="p-product-select__product-card"
    />
    <!-- <TotalSection
      v-bind:orderQuantity="orderQuantity"
      v-bind:totalPrice="totalPrice"
      @totalSubmit="total"
      class="p-product-select__total-component"
    /> -->
    <TotalSection
      v-bind:orderQuantity="orderQuantity"
      v-bind:totalPrice="totalPrice"
      class="p-product-select__total-component"
    />
  </div>
</template>

<script>
import ProductCard from '~/components/ProductCard.vue'
import TotalSection from '~/components/TotalSection.vue'

export default {
  components: {
    ProductCard,
    TotalSection
  },
  data () {
    return {
      products: [],
      orderQuantity: 0,
      totalPrice: 0
    }
  },
  watch: {
    $route: {
      async handler () {
        await this.getProducts()
        this.products = this.$store.state.product.products
      },
      immediate: true
    }
  },
  methods: {
    async getProducts () {
      await this.$store.dispatch('product/getProducts')
    },
    total (changeQuantity, changePrice) {
      this.orderQuantity += changeQuantity
      this.totalPrice += changePrice
    }
  }
}
</script>
