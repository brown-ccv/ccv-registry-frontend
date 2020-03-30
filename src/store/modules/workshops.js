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
      return GithubService.getData('workshops')
        .then(response => {
          commit('SET_WORKSHOP_DATA', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
