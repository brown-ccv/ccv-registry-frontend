<template>
  <CodeReview v-if="option === 'code-review'" />
  <Presentation v-else-if="option === 'presentation'" />
  <Programmer v-else-if="option === 'programmer'" />
  <App v-else-if="option === 'app'" />
  <Teaching v-else-if="option === 'teaching'" />
  <TeachingCCV v-else-if="option === 'teaching-ccv'" />
</template>

<script>
import CodeReview from '@/assets/illustrations/undraw/undraw_code_review.svg'
import Presentation from '@/assets/illustrations/undraw/undraw_Presentation.svg'
import Programmer from '@/assets/illustrations/undraw/undraw_programmer.svg'
import App from '@/assets/illustrations/undraw/undraw_progressive_app.svg'
import Teaching from '@/assets/illustrations/undraw/undraw_teaching.svg'
import TeachingCCV from '@/assets/illustrations/undraw/undraw_teaching_ccv.svg'

export default {
  props: {
    option: {
      type: String,
      required: true
    }
  },
  components: {
    CodeReview,
    Presentation,
    Programmer,
    App,
    Teaching,
    TeachingCCV
  }
}
</script>
