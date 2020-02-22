import Vue from 'vue'
import Vuex from 'vuex'
import foldersData from '../api/jsonData.js'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      folders: []
  },
  getters: {

  },
  mutations: {
    SET_FOLDERS(state){
        state.folders = foldersData.getFolders()
    },
    changeFolderData(state, value){
        // eslint-disable-next-line no-debugger
        debugger
        state.folders = value
    }

  },
  actions: {
      getFolders(context){
          context.commit('SET_FOLDERS')
      },
      setFolders(context){
          context.commit('SET_FOLDERS')
      }

  },
  modules: {

  }
})
