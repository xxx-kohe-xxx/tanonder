<template>
  <div class="p-mypage">
    <h1 class="p-mypage__heading">
      マイページ
    </h1>
    <OrderList class="p-mypage__order-list" />
    <button type="submit" class="p-mypage__button">
      変更
    </button>
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
