<template>
  <div class="p-quantity-button">
    <button v-on:click="decrease" class="p-quantity-button__button p-quantity-button__button--correction">
      -
    </button>
    <input v-model="quantity" type="number" class="p-quantity-button__input">
    <button v-on:click="increase" class="p-quantity-button__button">
      +
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      quantity: 0
    }
  },
  methods: {
    decrease () {
      if (this.quantity !== 0) {
        this.quantity -= 1
      }
    },
    increase () {
      this.quantity += 1
      return false
    }
  }
}
</script>
