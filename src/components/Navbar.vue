<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <CCVLogo class="logo" />
      <BrownLogo class="brown-logo" />

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="ccvNav"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="ccvNav" class="navbar-menu">
      <div class="navbar-end">
        <a class="navbar-item" href="https://ccv.brown.edu">ccv.brown.edu</a>
        <a class="navbar-item" href="https://ccv.brown.edu/documentation/"
          >Documentation</a
        >
        <a
          class="navbar-item"
          href="https://ask.cyberinfrastructure.org/c/brown-research-computing"
          >Discourse</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
import CCVLogo from '@/assets/illustrations/ccv-logo.svg'
import BrownLogo from '@/assets/illustrations/brown-logo.svg'

export default {
  components: {
    CCVLogo,
    BrownLogo
  }
}
</script>

<style></style>
