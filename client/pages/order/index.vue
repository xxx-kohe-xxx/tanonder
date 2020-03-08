<template>
  <div class="p-order">
    <h1 class="p-order__heading">
      頼まれた全商品一覧
    </h1>
    <OrderList class="p-order__order-list" />
    <!-- <ModalWindow class="p-order__modal-window" /> -->
  </div>
</template>

<script>
import OrderList from '~/components/OrderList'
// import ModalWindow from '~/components/ModalWindow'

export default {
  components: {
    OrderList
    // ModalWindow
  }
}
</script>
