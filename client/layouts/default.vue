<template>
  <div>
    <Header />
    <TanonderMenu />
    <nuxt />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import TanonderMenu from '~/components/TanonderMenu'
export default {
  components: {
    Header,
    TanonderMenu
  }
}
</script>
