import Vue from 'vue'
import Vuex from 'vuex'
import workshops from '@/store/modules/workshops'
import software from '@/store/modules/software'
import talks from '@/store/modules/talks'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    workshops,
    software,
    talks
  }
})
