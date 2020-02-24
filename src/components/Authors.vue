<template>
  <div class="authors">
    <font-awesome-icon
      class="fa-icon"
      :icon="['fad', 'user-friends']"
      size="lg"
      aria-label="Authors"
    />
    <span class="author" v-for="(author, index) in authors" :key="index">
      <a :href="userUrl(author)">{{ author.name }} </a>
      <span
        v-show="index != Object.keys(authors).length - 1"
        class="dot-separator"
      >
        &bull;
      </span>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    authors: {
      type: Array,
      required: true
    }
  },
  methods: {
    userUrl(author) {
      return `https://github.com/${author.github_user}`
    }
  }
}
</script>
