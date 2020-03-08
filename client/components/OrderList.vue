<template>
  <div class="p-order-list">
    <ul class="p-order-list__header">
      <li class="p-order-list__header-name">
        品名
      </li>
      <li class="p-order-list__header-quantity">
        個数
      </li>
      <li class="p-order-list__header-price">
        金額
      </li>
    </ul>
    <ul v-for="product in products" v-bind:key="product.name" class="p-order-list__product">
      <li class="p-order-list__product-name">
        {{ product.name }}
      </li>
      <li class="p-order-list__product-quantity">
        {{ product.quantity }}
      </li>
      <li class="p-order-list__product-price">
        {{ product.price }}
      </li>
    </ul>
    <ul class="p-order-list__total">
      <li class="p-order-list__total-name">
        合計
      </li>
      <li class="p-order-list__total-quantity">
        {{ quantity }}
      </li>
      <li class="p-order-list__total-price">
        {{ price }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      quantity: 0,
      price: 0,
      products: [
        {
          name: 'まぐろ',
          quantity: 1,
          price: 108
        },
        {
          name: 'まぐろはらみ',
          quantity: 1,
          price: 108
        },
        {
          name: 'サーモン',
          quantity: 1,
          price: 108
        }
      ]
    }
  }
}
</script>
