<template>
  <div class="item-card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          src="https://bulma.io/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />
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
