<template>
  <div>
    <vue-markdown class="details">
      {{ details }}
    </vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  props: ['details'],
  components: {
    VueMarkdown
  }
}
</script>
