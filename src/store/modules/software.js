import GithubService, { query, serialize } from '@/services/GithubService'

export default {
  namespaced: true,
  state: {
    software: []
  },
  mutations: {
    SET_SOFTWARE_DATA(state, payload) {
      state.software = payload
    }
  },
  actions: {
    fetchSoftware({ commit }) {
      return GithubService.getData(query('software'))
        .then(response => {
          commit('SET_SOFTWARE_DATA', serialize(response))
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
