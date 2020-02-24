<template>
  <div class="small">
    <font-awesome-icon
      class="fa-icon"
      :icon="['fad', 'calendar-day']"
      aria-label="Calendar, next workshop:"
    />
    Next: {{ moment(date).format('DD MMMM YYYY') }}
  </div>
</template>
<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    }
  }
}
</script>
