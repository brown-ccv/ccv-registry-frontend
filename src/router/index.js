import Vue from 'vue'
import VueRouter from 'vue-router'
import Workshops from '../views/Workshops.vue'
import Software from '../views/Software.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/workshops',
    name: 'workshops',
    component: Workshops
  },
  {
    path: '/software',
    name: 'software',
    component: Software
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
