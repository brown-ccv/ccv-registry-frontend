import GithubService, { query, serialize } from '@/services/GithubService'

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
      return GithubService.getData(query('workshops'))
        .then(response => {
          commit('SET_WORKSHOP_DATA', serialize(response))
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
