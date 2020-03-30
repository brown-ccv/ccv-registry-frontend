import Vue from 'vue'
import VueRouter from 'vue-router'
import Workshops from '@/views/Workshops.vue'
import Software from '@/views/Software.vue'
import Talks from '@/views/Talks.vue'
import Details from '@/views/Details.vue'
import Index from '@/views/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/workshops',
    name: 'workshops',
    component: Workshops
  },
  {
    path: '/software',
    name: 'software',
    component: Software
  },
  {
    path: '/talks',
    name: 'talks',
    component: Talks
  },
  {
    path: '/workshop/:slug',
    name: 'workshop',
    component: Details,
    props: true
  },
  {
    path: '/talk/:slug',
    name: 'talk',
    component: Details,
    props: true
  },
  {
    path: '/package/:slug',
    name: 'package',
    component: Details,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
