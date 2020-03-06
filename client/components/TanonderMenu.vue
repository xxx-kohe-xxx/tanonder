<template>
  <div class="p-tanonder-menu" v-show="false">
    <h1 class="p-tanonder-menu__heading">
      MENU
    </h1>
    <div class="p-tanonder-menu__link-section">
      <nuxt-link class="p-tanonder-menu__link-item" to="/mypage">
        マイページ
      </nuxt-link>
      <nuxt-link class="p-tanonder-menu__link-item" to="/order">
        みんなが頼んだ商品
      </nuxt-link>
      <nuxt-link class="p-tanonder-menu__link-item" to="/select">
        商品を頼み直す
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
