<template>
  <div class="section">
    <h1>{{ $t('main.workshops') }}</h1>
    <CardGroup>
      <Card
        v-for="(item, index) in workshops.workshops"
        :key="index"
        :model="item"
      ></Card>
    </CardGroup>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['workshops'])
  },
  mounted() {
    this.fetchWorkshops()
  },
  methods: {
    ...mapActions('workshops', ['fetchWorkshops'])
  }
}
</script>
