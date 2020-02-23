<template>
  <div id="nav" class="menu-items">
    <router-link :to="{ name: 'workshops' }" class="menu-link"
      >Workshops</router-link
    >
    <router-link :to="{ name: 'software' }" class="menu-link"
      >Software</router-link
    >
    <router-link :to="{ name: 'talks' }" class="menu-link">Talks</router-link>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
