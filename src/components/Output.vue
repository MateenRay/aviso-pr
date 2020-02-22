<template>
  <v-container>
    <v-row class="text-center">
      <v-treeview hoverable indeterminate-icon="mdi-bookmark-minus" :items="folders"></v-treeview>
    </v-row>
  </v-container>
</template>

<script>
import store from '../store/index.js'
  export default {
    name: 'Output',
    data: () => ({
    }),
    computed: {
      folders() {
        return store.state.folders 
      }
    },
    methods: {
      renderFolder(folders){
        let temp = []
        Object.keys(folders).map((key) => {
            if (typeof folders[key] === 'object') {
              this.makeNewObj(key, temp)

              this.renderFolder(folders[key])
            }
            else {
              console.log(key + folders[key],'THIS');  // or do something with key and val.
            } 
          });
          this.res.push(temp)
      },
      setJson( value){
        return {id:value, name: value, children: []}
      },
      makeNewObj(key,arr){
        // eslint-disable-next-line no-prototype-builtins
        if(arr.hasOwnProperty('children')){
          arr.children.push(this.setJson(key))
          console.log(arr[0], 'Formed array')
        }
        else {
          arr.push(this.setJson(key))
        }
          
          
      }
    }
  }
</script>