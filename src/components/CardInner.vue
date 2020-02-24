<template>
  <div>
    <div class="card-image">
      <figure v-show="model.image" class="image is-4by3">
        <img :src="model.image" alt="model.name image" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ model.name }}</p>
        </div>
      </div>

      <div class="content">
        {{ model.description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['model']
}
</script>
