<template>
  <div>
    <b-form-textarea
      id="textarea"
      v-model="text"
      placeholder="Enter something..."
      rows="10"
      max-rows="6"
    ></b-form-textarea>

    <b-button variant="dark" v-on:click="Convert">Convert</b-button>

    <pre class="mt-3 mb-0" v-if="isResponseTaken">{{ response.data }}</pre>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        text: "",
        response: null,
        isResponseTaken: false
      };
    },
    methods: {
      Convert() {
        axios.post("http://localhost:3000/latin-to-morse", { text: this.text })
          .then((res) => {
            this.response = res;
            this.isResponseTaken = true;
          })
          .catch(() => {
            console.log("Something Wrong!")
          });
      }
    }
  };
</script>

<style>
</style>
