<template>
  <div
    class="page"
  >
    <div class="canvas"
        :style="[ page.backgroundImage  !== 'color' ? {'background-image': 'url(' + page.backgroundImage + ')'} : {'background-color': page.backgroundColor}]">
      <img v-if="page.frame && page.frame.url" :src="page.frame.url" alt="" class="page-frame">
      <DragItem v-for="item in images" :item="item" :key="item.id" :index="item.id" @onEdit="editPhoto"/>
      <DragText v-for="item in textFields" :key="item.id" :index="item.id" @onEdit="onTextEdit(item.id)"/>
    </div>
  </div>
</template>

<script>
import DragItem from "~/components/editor/DragItem"
import DragText from "~/components/editor/DragText"

export default {
  components: {DragItem, DragText},
  props: {
    index: {
      type: Number
    },
    page: {
      type: Object,
      required: true
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
    images() {
      return this.page.elements.filter(el => el.type === 'image')
    },
    textFields() {
      return this.page.elements.filter(el => el.type === 'text')
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
  height: var(--canvas-height);
  width: var(--canvas-width);
}
</style>
