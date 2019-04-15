
<template>

  <v-app id="app" class="fill-height">

    <v-layout row style="padding-bottom:0px" >

      <v-flex md8 offset-md2 style="overflow:auto;" class="pr-3 pl-3">

        <div v-for="chat in CHATS" class="mt-4 mb-4" style="max-width:80%">
          <app-chat-item :chat="chat"></app-chat-item>
        </div>

      </v-flex>
    </v-layout>

    <v-layout>
      <app-chat-box></app-chat-box>
    </v-layout>

  </v-app>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import chatItem from '../components/ChatItem'
  import chatHandle from '../components/Handle'
  import chatBox from '../components/ChatBox'
  import 'vuetify/dist/vuetify.min.css'

  export default {
    components : {
      appChatItem : chatItem,
      appChatHandle : chatHandle,
      appChatBox : chatBox,
    },
    computed:{
      ...mapGetters(['CHATS','HANDLE']),
      ...mapActions(['SET_CHAT'])
    },
    beforeMount(){
      // alert("Please, LOG IN!");
      // if(this.$store.getters.NAME === '') {
      //   this.$router.push({path: '/login'})
      // }
    },
    mounted(){
      this.$store.dispatch("SET_CHAT");
    },
    updated(){
      var container = this.$refs.chatContainer;
      container.scrollTop = container.scrollHeight;
    },
    sockets : {
      connect: function(){
        console.log('socket connected');
      },
      chat : function(val){
        this.$store.dispatch("ADD_CHAT", val);
      }
    }
  }
</script>

<style>
  @import '../../node_modules/vuetify/dist/vuetify.min.css';
  html,body {
    height: 50%
  }
</style>
