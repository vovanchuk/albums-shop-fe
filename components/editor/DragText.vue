<template>
  <vue-drag-resize
    :w="200"
    :h="20"
    :z="this.zIndex"
    @resizing="resize"
    @dragging="resize"
    :parentLimitation="true"
    @activated="showButtons"
    @deactivated="hideButtons"
  >
    <div class="wrapper" :ref="index">
        <p>{{element.text}}</p>
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
      </b-button-group>
    </div>
  </vue-drag-resize>
</template>

<script>
export default {
  props: {
    index: {
      type: Number
    },
    page: {
      type: Number
    }
  },
  data() {
    return {
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      active: false,
    }
  },
  methods: {
    resize(newRect) {
      this.width = newRect.width;
      this.height = newRect.height;
      this.top = newRect.top;
      this.left = newRect.left;
    },
    showButtons(){
      this.active = true; 
    },
    hideButtons(){
      this.active = false; 
    },
    toFront(){
      this.$store.commit('CHANGE_Z_TO_TOP', this.index)
      this.$forceUpdate()
    },
    toBack(){
      this.$store.commit('CHANGE_Z_TO_BOTTOM', this.index)
      this.$forceUpdate()
    },
    editText(){

    }
  },
  computed: {
    zIndex() {
      var obj = this.$store.getters.getElementFromCurrentPage(this.index) 
      return obj ? obj.zIndex : this.index
    },
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
