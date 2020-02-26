<template>
  <!-- <NameForm @register="register" class="p-register" /> -->
  <NameForm @register="register" class="p-register" />
</template>

<script>
import Axios from 'axios'
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
    // register (user) {
    //   this.username = user
    //   console.log('method: ' + this.username)
    //   const response = this.$store.dispatch('user/register', this.username)
    //   console.log(response)
    //   const testresponse = Axios.post('http://tanonder.test/api/register', this.username)
    //   const testresponse = Axios.post('http://tanonder.test/api/register',)
    //   console.log(testresponse)
    // }
  }
}
</script>
