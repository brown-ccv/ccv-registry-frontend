import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import Card from '@/components/Card'
import CardGroup from '@/components/CardGroup'
import Navbar from '@/components/Navbar'
import Menu from '@/components/Menu'

Vue.component('Card', Card)
Vue.component('CardGroup', CardGroup)
Vue.component('Navbar', Navbar)
Vue.component('Menu', Menu)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
