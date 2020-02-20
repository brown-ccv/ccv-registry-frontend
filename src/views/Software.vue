<template>
  <div class="section">
    <h1>{{ $t('main.software') }}</h1>
    <Card
      v-for="(item, index) in software.software"
      :key="index"
      :model="item"
    ></Card>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['software'])
  },
  mounted() {
    this.fetchSoftware()
  },
  methods: {
    ...mapActions('software', ['fetchSoftware'])
  }
}
</script>
