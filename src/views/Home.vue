<template>
  <div class="container">
    <b-jumbotron class=" jumbo" text-variant="white">
      <template slot="header" >Kartaca Internship project morse alphabet converter</template>


      <p>Background image is the morse code like patterns found on mars</p>


      <hr class="my-4" >


      <b-button class="btnLeft" variant="primary" v-on:click="goToLatin">Latin To Morse Converter</b-button>
      <b-button variant="success" v-on:click="goToMorse">Morse To Latin Converter</b-button>
    </b-jumbotron>
  </div>
</template>
<style>
.jumbo{
  background-image: url("https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Ftimedotcom.files.wordpress.com%2F2016%2F07%2Fmars-morse-code-wide.jpg&w=800&c=sc&poi=face&q=85");
  background-position: center;
  background-size: cover;
}
.btnLeft{
  margin-right: 15px;
}

</style>

<script>
  export default {
    methods: {
      goToMorse() {
        this.$router.push({path: '/mtol'})
      },
      goToLatin() {
        this.$router.push({path: '/ltom'})
      }
    }
  }
</script>
