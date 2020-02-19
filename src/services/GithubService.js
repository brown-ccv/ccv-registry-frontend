import axios from 'axios'

const apiClient = axios.create({
  url: 'https://api.github.com/graphql',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.VUE_APP_GITHUB_TOKEN}`,
    'User-Agent': process.env.VUE_APP_GITHUB_USER
  },
  timeout: 10000
})

export default {
  getWorkshops() {
    return apiClient({
      data: {
        query: `{
          repository(owner: "brown-ccv", name: "ccv-registry") {
            object(expression: "action-test:workshops") {
              ... on Tree {
                entries {
                  name
                  object {
                    ... on Blob {
                      text
                    }
                  }
                }
              }
            }
          }
        }
        `
      }
    })
  }
}
