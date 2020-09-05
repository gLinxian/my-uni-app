import Vue from 'vue'
import Vuex from 'vuex'
import loading from './components/loading.js'
import modal from './components/modal.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    loading,
    modal
  }
})

Vue.prototype.$store = store

export default store
