import GithubService from '@/services/GithubService'

export default {
  namespaced: true,
  state: {
    workshops: []
  },
  mutations: {
    SET_WORKSHOP_DATA(state, payload) {
      state.workshops = payload
    }
  },
  actions: {
    fetchWorkshops({ commit }) {
      GithubService.getWorkshops()
        .then(response => {
          const content = response.data
          console.log(content)
          commit('SET_WORKSHOP_DATA', content)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
