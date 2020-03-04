<template>
  <div class="p-order">
    <h1 class="p-order__heading">
      頼まれた全商品一覧
    </h1>
    <OrderList class="p-order__order-list" />
  </div>
</template>

<script>
import OrderList from '~/components/OrderList'

export default {
  components: {
    OrderList
  }
}
</script>
