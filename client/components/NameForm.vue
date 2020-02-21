<template>
  <div class="p-register">
    <form v-on:submit.prevent="register" class="p-register__input-section">
      <label for="register" class="p-register__label">名前入力</label>
      <input v-model="name" type="text" name="register" class="p-register__input">
      <button type="submit" class="p-register__button">
        決定
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: null
    }
  },
  methods: {
    register () {
      this.$emit('register', this.name)
    }
  }
}
</script>
