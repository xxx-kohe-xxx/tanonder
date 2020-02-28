<template>
  <div class="p-total-section">
    <div class="p-total-section__view-section">
      <div class="p-total-section__quantity">
        {{ orderQuantity }}品
      </div>
      <div class="p-total-section__price">
        合計:{{ totalPrice }}円
      </div>
    </div>
    <form v-on:submit.prevent="execute" class="p-total-section__form">
      <button type="submit" class="p-total-section__button">
        決定
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    orderQuantity: {
      type: Number,
      default: 0
    },
    totalPrice: {
      type: Number,
      default: 0
    }
  },
  methods: {
    execute () {
      this.$emit('totalSubmit', this.orderQuantity, this.totalPrice)
    }
  }
}
</script>
