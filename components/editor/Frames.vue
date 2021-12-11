<template>
  <div class="my-3">
    <b-row class="ml-3">
      <div class="frame" v-for="frame in frames">
        <img class="preview" :src="frame.url" alt="" @click="setFrame(frame)">
      </div>
    </b-row>
  </div>
</template>

<script>
export default {
  methods: {
    setFrame(frame) {
      this.$store.commit('SET_CURRENT_PAGE_FRAME', frame)
    }
  },
  computed: {
    frames() {
      return this.$store.getters.getFrames
    },
    currentPage() {
      return this.$store.getters['getCurrentPage']
    },
  }
}
</script>

<style lang="scss">
.frame {
  width: 100px;
  height: 100px;
  border: 1px solid gray;
  margin: 0 20px;
}
img.preview {
  width: 100px;
  height: 100px;
  cursor: pointer;
}
</style>
