<template>
  <div class="page d-flex flex-column align-items-center">
    <div class="canvas"
        :style="[ page.backgroundImage  !== 'color' ? {'background-image': 'url(' + page.backgroundImage + ')'} : {'background-color': page.backgroundColor}]">
      <DragItem v-for="item in images" :item="item" :key="item.id" :index="item.id" @onEdit="editPhoto"/>
      <DragText v-for="item in textFields" :key="item.id" :index="item.id" @onEdit="onTextEdit(item.id)"/>
      <DragSticker v-for="item in stickers" :item="item" :key="item.id" :index="item.id"/>
    </div>
    <b-button-group class="nav-buttons mt-2">
      <b-button @click="previousPage">
        <b-icon icon="chevron-compact-left"></b-icon>
      </b-button>
      <b-button disabled>
        {{ this.index + 1 }}
      </b-button>
      <b-button @click="nextPage">
        <b-icon icon="chevron-compact-right"></b-icon>
      </b-button>
    </b-button-group>
  </div>
</template>

<script>
import DragItem from "~/components/editor/DragItem"
import DragText from "~/components/editor/DragText"
import DragSticker from '~/components/editor/DragSticker.vue'
export default {
  components: {DragItem, DragText, DragSticker},
  props: {
    index: {
      type: Number
    },
    page: {
      type: Object,
      required: true
    },
    pagesNumber: {
      type: Number,
    }
  },
  methods: {
    onTextEdit(id) {
      this.$emit('setCurrent', id)
    },
    editPhoto(data) {
      this.$emit('onEdit', {imageIndex: data.imageIndex, itemIndex: data.itemIndex})
    },
    previousPage(){
      if(this.index === 0)
        return
      var number = this.index - 1
      this.$store.commit('CHANGE_CURRENT_PAGE', number)
    },
    nextPage(){
      if(this.index === this.pagesNumber - 1)
        return
      var number = this.index + 1
      this.$store.commit('CHANGE_CURRENT_PAGE', number)
    },
  },
  computed: {
    images() {
      return this.page.elements.filter(el => el.type === 'image')
    },
    textFields() {
      return this.page.elements.filter(el => el.type === 'text')
    },
    stickers(){
      return this.page.elements.filter(el => el.type === 'sticker')
    },
  },
}
</script>

<style lang="scss">
.canvas {
  position: relative;
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
