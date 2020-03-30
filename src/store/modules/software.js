import GithubService from '@/services/GithubService'

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
      return GithubService.getData('software')
        .then(response => {
          commit('SET_SOFTWARE_DATA', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
