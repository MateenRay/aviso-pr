<template>
  <v-container>
    <v-row class="text-center">
      {{res}}
      <v-treeview hoverable indeterminate-icon="mdi-bookmark-minus" :items="res"></v-treeview>
    </v-row>
    <!-- <v-row class="text-center">
      <ul>
        <li v-for="(item, key, index) in folders" :key="index">

           {{key}}
            <ul v-if="typeof item === 'object'">
              <li v-for="(ins, key, index) in item" :key="index">
              {{key}}
                <ul v-if="typeof ins === 'object'">
                  
                  <li v-for="(i, key, index) in ins " :key="index">
                    {{key}}
                  </li>
                  </ul>
              </li>
            </ul>
           
        </li>
      </ul>
    </v-row> -->
  </v-container>
</template>

<script>
import folders from '../api/jsonData.js'
import store from '../store/index.js'
  export default {
    name: 'Output',

    data: () => ({
      folders: {},
      res: []
    }),
    computed: {
      mockData() {
        return store.state.mockData
      }
    },
    created() {
      this.folders = folders.getFolders()
      this.renderFolder(this.res, this.folders)
    },
    methods: {
      renderFolder(res, folders){
        Object.keys(folders).forEach((key) => {
            if (typeof folders[key] === 'object') {
              let arr = this.makeNewObj(key, res)
              console.log(arr, 'Returned Array')
              this.renderFolder(arr.children, folders[key]);

            }
            else {
              // console.log(key + folders[key],'THIS');  // or do something with key and val.
            } 
          });
      },
      setJson( value){
        return {id:value, name: value, children: []}
      },
      makeNewObj(key,arr){
          arr.push(this.setJson(key))
          console.log(arr[0], 'Formed array')
          return arr[0]
          
      }
    }
  }
</script>