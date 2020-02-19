<template>
  <div class="section">
    <h1>{{ $t('main.workshops') }}</h1>
    {{ workshops.workshops }}
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
