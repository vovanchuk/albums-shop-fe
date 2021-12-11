<template>
  <vue-drag-resize
    :w="element.width"
    :h="element.height"
    :z="element.zIndex"
    :x="element.left"
    :y="element.top"
    @resizing="resize"
    @dragging="resize"
    :parentLimitation="true"
    @activated="showButtons"
    @deactivated="hideButtons"
  >
    <div class="wrapper" :ref="index">
      <div v-html="element.text"></div>
      <b-button-group v-show="active" style="position: absolute">
        <b-button class="transparent" @click="editText">
          <b-icon icon="pencil"></b-icon>
        </b-button>
        <b-button class="transparent" @click="toFront">
          <b-icon icon="front"></b-icon>
        </b-button>
        <b-button class="transparent" @click="toBack">
          <b-icon icon="back"></b-icon>
        </b-button>
        <b-button class="transparent" @click="deleteElement">
          <b-icon icon="x"></b-icon>
        </b-button>
      </b-button-group>
    </div>
  </vue-drag-resize>
</template>

<script>
export default {
  props: {
    index: {
      type: String
    },
    page: {
      type: Number
    }
  },
  data() {
    return {
      active: false,
    }
  },
  methods: {
    showButtons(){
      this.active = true;
    },
    hideButtons(){
      this.active = false;
    },
    toFront(){
      this.$store.commit('CHANGE_Z_TO_TOP', this.index)
    },
    toBack(){
      this.$store.commit('CHANGE_Z_TO_BOTTOM', this.index)
    },
    resize(newRect) {
      var obj = {width: newRect.width, height: newRect.height, top: newRect.top, left: newRect.left}
      this.$store.commit('RESIZE_ELEMENT', {newSize: obj, idx: this.index})
    },
    editText(){
      this.$emit('onEdit')
    },
    deleteElement(){
      this.$store.commit('DELETE_ELEMENT', this.index)
    }
  },
  computed: {
    element(){
      return this.$store.getters.getElementFromCurrentPage(this.index)
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
  background-position: center;
  background: no-repeat;
  background-size: cover;
}
.transparent{
  background-color: white;
  border: 1px gray solid;
  border-radius: 0px;
  color: black;
}
</style>
