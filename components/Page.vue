<template>
  <div class="page" v-if="active">
    <div class="canvas mt-3"
        :style="[ pageData.backgroundImage  !== 'color' ? {'background-image': 'url(' + pageData.backgroundImage + ')'} : {'background-color': pageData.backgroundColor}]">
      <img v-if="pageData.frame && pageData.frame.url" :src="pageData.frame.url" alt="" class="page-frame">
      <DragItem v-for="item in images"  :key="item.id" :index="item.id" @onEdit="editPhoto"/>
      <DragText v-for="item in textFields" :key="item.id" :index="item.id" @onEdit="onTextEdit(item.id)"/>
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
  border: 1px solid rgba(0, 0, 0, 0.125);
  height: 500px;
  width: 500px;
}
</style>
