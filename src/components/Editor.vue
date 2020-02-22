<template>
  <v-container>
    <v-jsoneditor v-model="content" :plus="false" height="700px" @onChange="onChange" @error="onError" />
    <v-snackbar
      v-model="snackbar"
    >
      {{ text }}
      <v-btn
        color="pink"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
  </v-container>

</template>

<script>
import VJsoneditor from 'v-jsoneditor'
import store from '../store/index.js'
  export default {
    name: 'EditorJSON',
      components: {
        VJsoneditor
      },
    data: () => ({
      snackbar:false,
      text: ''
    }),
    created(){
      store.dispatch('getFolders')
    },
    watch:{
      content: function (value) {
        this.$store.commit('changeFolderData',value)
      }
    },
    computed:{
      content: {
        get(){
          return store.state.folders
        },
        set(value){
          this.$store.commit('changeFolderData',value)
        }
      }
    },
    methods: {
      onError() {
        this.snackbar = true
        this.text = 'Invalid Json Format please try one more time'
      }
    }
  }
</script>
