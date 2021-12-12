<template>
  <vue-drag-resize
    :w="item.width"
    :h="item.height"
    :z="item.zIndex"
    :x="item.left"
    :y="item.top"
    :isActive="item.active"
    :minw="100"
    :minh="100"
    @resizing="resize"
    @dragging="resize"
    :parentLimitation="true"
    @activated="showButtons"
    @deactivated="hideButtons"
  >
    <div class="wrapper" :style="[ item.src ? {'background-image': 'url(' + item.src  + ')'} : {'background-color': 'lightgray'}]">
      <b-button-group v-show="item.active">
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
    item: {
      type: Object
    }
  },
  data() {
    return {
      imageIndex: null,
    }
  },
  methods: {
    showButtons(){
      this.$store.commit('SET_ACTIVE', this.index)
    },
    hideButtons(){
      this.$store.commit('UNSET_ACTIVE', this.index)
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
    deleteElement(){
      this.$store.commit('DELETE_ELEMENT', this.index)
    }
  },
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
