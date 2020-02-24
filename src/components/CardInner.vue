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
          <span class="tag is-primary">{{ model.category }}</span>
          <p class="title is-4">{{ model.name }}</p>
          <IconText prefix="fab" iconName="github">
            <a :href="model.repo"> {{ repo }} </a>
          </IconText>
          <IconText prefix="fad" iconName="user-friends">
            <span
              class="author"
              v-for="(author, index) in model.authors"
              :key="index"
            >
              <a :href="userUrl(author)">{{ author.name }} </a>
              <span
                v-show="index != Object.keys(model.authors).length - 1"
                class="dot-separator"
              >
                &bull;
              </span>
            </span>
          </IconText>
          <IconText
            v-if="model.happening_next"
            prefix="fad"
            iconName="calendar-day"
          >
            Next: {{ moment(model.happening_next).format('DD MMMM YYYY') }}
          </IconText>
        </div>
      </div>

      <div class="content">
        {{ model.description }}
      </div>
      <a
        v-if="model.sign_up"
        :href="model.sign_up"
        class="button is-success is-rounded"
        >{{ $t('actions.sign-up') }}</a
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ['model'],
  computed: {
    repo() {
      return this.model.repo.replace('https://github.com/', '')
    }
  },
  methods: {
    userUrl(author) {
      return `https://github.com/${author.github_user}`
    }
  }
}
</script>
