import GithubService, { query, serialize } from '@/services/GithubService'

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
      GithubService.getData(query('talks'))
        .then(response => {
          commit('SET_TALKS_DATA', serialize(response))
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
