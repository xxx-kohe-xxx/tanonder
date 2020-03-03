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
    <ul class="p-order-list__product">
      <li class="p-order-list__product-name">
        まぐろ
      </li>
      <li class="p-order-list__product-quantity">
        1
      </li>
      <li class="p-order-list__product-price">
        108
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
    }
  }
}
</script>
