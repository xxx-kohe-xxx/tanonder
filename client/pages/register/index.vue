<template>
  <NameForm @register="register" class="p-register" />
</template>

<script>
import NameForm from '../../components/NameForm'
export default {
  components: {
    NameForm
  },
  data () {
    return {
      username: null
    }
  },
  methods: {
    register (user) {
      this.username = user
    }
  }
}
</script>
