<template>
  <div class="d-flex flex-column min-vh-100" style="position: relative;">
    <EditorNavigation/>
    <nuxt class="wrapper flex-grow-1"/>
    <LoadingOverlay v-if="loading"/>
  </div>
</template>

<script>
import LoadingOverlay from '~/components/LoadingOverlay'

export default {
  components: {LoadingOverlay},
  computed: {
    loading() {
      return this.$store.getters['getLoading']
    }
  }
}
</script>
