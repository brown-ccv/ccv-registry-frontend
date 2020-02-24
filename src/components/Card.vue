<template>
  <div>
    <div class="item-card">
      <router-link
        v-if="model.details"
        :to="{
          name: category,
          params: { slug: model.slug, details: model.details }
        }"
      >
        <CardInner :model="model" />
      </router-link>
      <template v-else>
        <CardInner :model="model" />
      </template>
    </div>
  </div>
</template>

<script>
export default {
  props: ['model', 'category']
}
</script>
