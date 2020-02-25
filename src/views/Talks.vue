<template>
  <div class="section">
    <Hero title="Talks and Conferences" :subtitle="$t('description.talks')">
      <HeroImage option="presentation" />
    </Hero>
    <CardGroup>
      <Card
        v-for="(item, index) in talks.talks"
        :key="index"
        :model="item"
        category="talk"
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
    ...mapState(['talks'])
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    nProgress.start()
    store.dispatch('talks/fetchTalks').then(() => {
      nProgress.done()
      next()
    })
  }
}
</script>
