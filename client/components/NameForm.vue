<template>
  <div class="p-name-form">
    <form v-on:submit.prevent="register" class="p-name-form__input-section">
      <label for="register" class="p-name-form__label">名前入力</label>
      <input v-model="name" type="text" name="register" class="p-name-form__input">
      <button type="submit" class="p-name-form__button">
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
