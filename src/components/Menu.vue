<template>
  <div id="nav" class="menu-items">
    <router-link :to="{ name: 'workshops' }" class="menu-link">{{
      $t('main.workshops')
    }}</router-link>
    <router-link :to="{ name: 'software' }" class="menu-link">{{
      $t('main.software')
    }}</router-link>
    <router-link :to="{ name: 'talks' }" class="menu-link">{{
      $t('main.talks')
    }}</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false
    }
  }
}
</script>

<style></style>
