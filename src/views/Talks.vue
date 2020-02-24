<template>
  <div class="section">
    <h1>{{ $t('main.talks') }}</h1>
    <Card
      v-for="(item, index) in talks.talks"
      :key="index"
      :model="item"
      category="talk"
    ></Card>
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
