<template>
  <div class="container" style="margin-top: 20px;">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Password:" label-for="input-3">
        <b-form-input
          id="input-3"
          type="password"
          v-model="form.password"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Confirm Password:" label-for="input-3">
        <b-form-input
          id="input-3"
          type="password"
          v-model="form.password2"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>


  <!--  <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
-->

  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          email: '',
          password: '',
          password2: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        // alert(JSON.stringify(this.form))
        this.$store.dispatch("SIGN_UP", this.form).then((status) => {
          status === 200 ? this.$router.push({path: '/'}) : this.$router.push({path: '/register'})
        })
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.name = ''
        this.form.email = ''
        this.form.password = ''
        this.form.password2 = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
