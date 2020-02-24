<template>
  <div class="section">
    <Hero title="Workshops" :subtitle="$t('description.workshops')">
      <HeroImage option="teaching" />
    </Hero>
    <CardGroup>
      <Card
        v-for="(item, index) in workshops.workshops"
        :key="index"
        :model="item"
        category="workshop"
      ></Card>
    </CardGroup>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '@/store/index'
import nProgress from 'nprogress'

export default {
  computed: {
    ...mapState(['workshops'])
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    nProgress.start()
    store.dispatch('workshops/fetchWorkshops').then(() => {
      nProgress.done()
      next()
    })
  }
}
</script>
