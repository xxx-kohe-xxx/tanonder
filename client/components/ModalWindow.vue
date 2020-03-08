<template>
  <div class="p-modal-window">
    <div class="p-modal-window__window">
      <div class="p-modal-window__text">
        <p>{{ product.name }}を<br>頼んだのは</p>
        <p v-for="name in names" v-bind:key="name">
          {{ name }}さん
        </p>
      </div>
      <button class="p-modal-window__button">
        閉じる
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {
        name: 'まぐろ'
      },
      names: [
        'kohe',
        'non'
      ]
    }
  }

}
</script>
