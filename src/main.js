import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'

// add moment
import moment from 'moment'
Vue.prototype.moment = moment

// import nprogress css
import 'nprogress/nprogress.css'

// Fontawesome imports and registration
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faUser } from '@fortawesome/pro-duotone-svg-icons'
import {
  faCalendarDay,
  faChevronRight
} from '@fortawesome/pro-duotone-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faGithub)
library.add(faUser)
library.add(faCalendarDay)
library.add(faChevronRight)

// Global components imports and registration
import Card from '@/components/Card'
import CardGroup from '@/components/CardGroup'
import Hero from '@/components/Hero'
import HeroImage from '@/components/HeroImage'
import IconText from '@/components/IconText'
import Menu from '@/components/Menu'
import Navbar from '@/components/Navbar'

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('Card', Card)
Vue.component('CardGroup', CardGroup)
Vue.component('Hero', Hero)
Vue.component('HeroImage', HeroImage)
Vue.component('IconText', IconText)
Vue.component('Menu', Menu)
Vue.component('Navbar', Navbar)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
