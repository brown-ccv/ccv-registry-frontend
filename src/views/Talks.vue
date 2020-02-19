<template>
  <div class="section">
    <h1>{{ $t('main.talks') }}</h1>
    {{ talks.talks }}
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
