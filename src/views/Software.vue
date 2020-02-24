<template>
  <div class="section">
    <h1>{{ $t('main.software') }}</h1>
    <Card
      v-for="(item, index) in software.software"
      :key="index"
      :model="item"
      category="software"
    ></Card>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from '@/store/index'
import nProgress from 'nprogress'

export default {
  computed: {
    ...mapState(['software'])
  },
  beforeRouteEnter(routeTo, routeFrom, next) {
    nProgress.start()
    store.dispatch('software/fetchSoftware').then(() => {
      nProgress.done()
      next()
    })
  }
}
</script>
