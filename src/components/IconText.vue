<template>
  <div class="icon-text">
    <div class="icon-text-left">
      <font-awesome-icon
        class="fa-icon"
        :icon="icon"
        size="lg"
        aria-label="#TODO"
      />
    </div>
    <slot class="icon-text-right"></slot>
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
