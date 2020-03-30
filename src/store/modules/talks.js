import GithubService from '@/services/GithubService'

export default {
  namespaced: true,
  state: {
    talks: []
  },
  mutations: {
    SET_TALKS_DATA(state, payload) {
      state.talks = payload
    }
  },
  actions: {
    fetchTalks({ commit }) {
      return GithubService.getData('talks')
        .then(response => {
          commit('SET_TALKS_DATA', response.data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
