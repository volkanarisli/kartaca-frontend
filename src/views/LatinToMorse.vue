<template>
  <div class="outer_div">
    <div class="text_area">
      <b-form-textarea
        id="textarea"
        v-model="text"
        placeholder="Enter something..."
        rows="10"
        max-rows="6"
      ></b-form-textarea>
    </div>

    <div class="button_div">
      <b-button class="button button_first" variant="dark" v-on:click="Convert">Convert</b-button>
      <b-button class="button" variant="dark" v-on:click="Reset">Reset</b-button>
    </div>
    <div class="result_div">
      <textarea class="text_area2" rows="8" v-if="isResponseTaken"  v-model="response.data"></textarea>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        text: "",
        response: null,
        isResponseTaken: false,
      };
    },
    methods: {
      Convert() {
        axios.post("http://localhost:3000/latin-to-morse", {text: this.text})
          .then((res) => {
            this.response = res;
            console.log(this.response.data.status)
            this.response.data.status === 404 ? this.response = false : this.isResponseTaken = true
          })
          .catch(() => {
            console.log("Something Wrong!")
          });
      },
      Reset() {
        this.text = ''
        this.response = ''
        this.isResponseTaken = false
      }
    },
  };
</script>

<style>
  .text_area {
    margin-top: 100px;
    display: flex;
    justify-content: center;
  }

  #textarea {
    width: 1000px;
  }

  .button_div {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

  .button {
    width: 300px;
  }

  .result_div {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }

  .text_area2 {
    width: 1000px;
  }

  .button_first {
    margin-right: 20px;
  }

</style>
