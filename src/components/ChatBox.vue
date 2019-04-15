<template lang="html">
  <v-flex md8 offset-md2 class="pa-1" @submit.prevent="sendMessage">
    <v-form style="width:100%">
      <v-text-field
        label="Solo"
        placeholder="Type Your Message"
        v-model="message"
        solo
        ref="message"
      >
      </v-text-field>
    </v-form>
  </v-flex>

</template>

<script>
  export default {
    data () {
      return {
        message : "",
        author : this.$store.getters.NAME
      }
    },
    methods : {
      async sendMessage(){
        if (this.$store.getters.NAME !== '') {
          if (this.handle || this.message) {
            let message = {
              handle: this.handle,
              author: this.author,
              message: this.message
            }
            let response = await this.$socket.emit('chat', message);
            this.message = "";
          }
        } else {
          alert('Please, Log In!')
          setTimeout(3000)
          this.$router.push({path: '/login'})
        }
      },
    }
  }
</script>

<style lang="css">
</style>
