<template>
  <div class="page" :class="{'d-none': !active}">
    <div class="canvas" :ref="index"
         :style="[ bgImage !== 'color' ? {'background-image': 'url(' + bgImage + ')'} : {'background-color': bgColor}]">
      <img v-if="pageData.frame && pageData.frame.url" :src="pageData.frame.url" alt="" class="page-frame">
      <DragItem v-for="(item, idx) in images" ref="elements" :key="idx" :index="idx" @onEdit="editPhoto"/>
      <DragText v-for="(item, idx) in textFields" :key="idx" :index="idx" @onEdit="onTextEdit(item.id)"/>
    </div>
  </div>
</template>

<script>
import DragItem from "~/components/editor/DragItem";
import DragText from "~/components/editor/DragText";

export default {
  components: {DragItem, DragText},
  props: {
    index: {
      type: Number
    }
  },
  methods: {
    onTextEdit(id) {
      this.$emit('setCurrent', id)
    },
    editPhoto(data) {
      this.$emit('onEdit', {imageIndex: data.imageIndex, itemIndex: data.itemIndex})
    },
  },
  computed: {
    pageData() {
      return this.$store.getters['getCurrentPageData']
    },
    currentPage() {
      return this.$store.getters['getCurrentPage']
    },
    images() {
      return this.$store.getters['getPhotosFromPage']
    },
    textFields() {
      return this.$store.getters['getTextFieldsFromPage']
    },
    active() {
      return +this.index === this.currentPage
    },
    bgImage() {
      return this.$store.getters['getPageBackgroundImage']
    },
    bgColor() {
      return this.$store.getters['getPageBackgroundColor']
    }
  },
}
</script>

<style lang="scss">
.canvas {
  position: relative;
}
.page-frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.canvas {
  background-position: center;
  background: no-repeat;
  background-size: cover;
}
</style>
