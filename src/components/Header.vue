<template>
  <div>

    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="/">Converter</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item ><router-link tag="li" to="/ltom">Latin Alphabet to Morse Code</router-link></b-nav-item>
          <b-nav-item ><router-link tag="li" to="/mtol">Morse Code to Latin Alphabet</router-link></b-nav-item>
          <b-nav-item ><router-link tag="li" to="/chat">CHAT </router-link></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">

          <b-nav-item-dropdown right>
            <!-- Using 'button-content' slot -->
            <template slot="button-content">
              <em v-if="NAME === ''">Login / Sign Up</em>
              <em v-if="NAME !== ''"> Log Out</em>
            </template>
            <b-dropdown-item v-if="NAME !== ''" href="/" v-on:click="logOut">Log Out</b-dropdown-item>
            <b-dropdown-item v-if="NAME === ''" href="/login">Login</b-dropdown-item>
            <b-dropdown-item v-if="NAME === ''" href="/register">Sign Up</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
  import {mapState, mapMutations } from 'vuex';

  export default {
    data() {
      return {}
    },
    computed:
      mapState(['NAME']),
    methods:{
      logOut(){
        this.$store.dispatch("SET_NAME_EMPTY");
      }
    }
  };
</script>

<style>

</style>


