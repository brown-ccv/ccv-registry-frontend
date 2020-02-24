<template>
  <div class="small">
    <font-awesome-icon
      class="fa-icon"
      :icon="icon"
      size="lg"
      aria-label="Authors"
    />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      required: true
    },
    prefix: {
      type: String,
      required: true
    }
  },
  computed: {
    icon() {
      return [this.prefix, this.iconName]
    }
  }
}
</script>
