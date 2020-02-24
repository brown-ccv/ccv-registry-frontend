<template>
  <a :href="url" class="github-link">
    <font-awesome-icon
      class="fa-icon"
      :icon="['fab', 'github']"
      size="lg"
      aria-label="Link to author's Github Page"
    />
    {{ repo }}
  </a>
</template>

<script>
export default {
  props: ['url', 'repo']
}
</script>
