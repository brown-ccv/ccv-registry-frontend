import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

import 'nprogress/nprogress.css'

// Fontawesome imports and registration
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUserFriends } from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub)
library.add(faUserFriends)

// Global components imports and registration
import Authors from '@/components/Authors'
import Card from '@/components/Card'
import CardInner from '@/components/CardInner'
import CardGroup from '@/components/CardGroup'
import GithubLink from '@/components/GithubLink'
import Hero from '@/components/Hero'
import HeroImage from '@/components/HeroImage'
import Menu from '@/components/Menu'
import Navbar from '@/components/Navbar'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('Authors', Authors)
Vue.component('Card', Card)
Vue.component('CardInner', CardInner)
Vue.component('CardGroup', CardGroup)
Vue.component('GithubLink', GithubLink)
Vue.component('Hero', Hero)
Vue.component('HeroImage', HeroImage)
Vue.component('Menu', Menu)
Vue.component('Navbar', Navbar)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
