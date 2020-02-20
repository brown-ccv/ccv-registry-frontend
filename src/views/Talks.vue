<template>
  <div class="section">
    <h1>{{ $t('main.talks') }}</h1>
    <Card
      v-for="(item, index) in talks.talks"
      :key="index"
      :model="item"
    ></Card>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['talks'])
  },
  mounted() {
    this.fetchTalks()
  },
  methods: {
    ...mapActions('talks', ['fetchTalks'])
  }
}
</script>
