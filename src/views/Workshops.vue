<template>
  <div class="section">
    <h1>{{ $t('main.workshops') }}</h1>
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
