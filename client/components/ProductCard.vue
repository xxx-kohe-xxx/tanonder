<template>
  <div class="p-product-card">
    <div class="p-product-card__image-section">
      <img class="p-product-card__image" src="../assets/image/pho_maguro.png" alt="商品画像">
    </div>
    <div class="p-product-card__info-section">
      <ul>
        <li class="p-product-card__name">
          {{ name }}
        </li>
        <li class="p-product-card__price">
          {{ price }}円 + 税
        </li>
      </ul>
      <div class="p-product-card__button">
        <QuantityButton v-on:quantity="changeQuantity" />
      </div>
    </div>
  </div>
</template>

<script>
import QuantityButton from './QuantityButton'
export default {
  components: {
    QuantityButton
  },
  props: {
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      quantity: 0
    }
  },
  methods: {
    changeQuantity (quantity) {
      let changeQuantity
      let changePrice
      if (this.quantity > quantity) {
        changeQuantity = -1
        changePrice = -1 * this.price
        this.quantity = quantity
      } else if (this.quantity < quantity) {
        changeQuantity = 1
        this.quantity = quantity
        changePrice = this.price
      }
      this.$emit('total', changeQuantity, changePrice)
    }
  }
}
</script>

<style></style>
