<template>
  <vue-drag-resize
    :w="this.width"
    :h="this.height"
    :z="this.zIndex"
    :x="this.left"
    :y="this.top"
    @resizing="resize"
    @dragging="resize"
    :parentLimitation="true"
    @activated="showButtons"
    @deactivated="hideButtons"
  >
    <div class="wrapper" :ref="index" @drop="drop" @dragover="allowDrop"  :style="[ image ? {'background-image': 'url(' + image + ')'} : {'background-color': 'lightgray'}]">
      <b-button-group v-show="active">
        <b-button class="transparent" @click="editPhoto">
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
      type: Number
    },
    page: {
      type: Number
    }
  },
  data() {
    return {
      active: false,
      imageIndex: null,
    }
  },
  methods: {
    allowDrop(e) {
      e.preventDefault();
    },
    drop(e) {
      e.preventDefault();
      var id = e.dataTransfer.getData("text")
      this.active = true; 
      var obj = this.images[id]
      this.$store.commit('ADD_IMAGE_TO_PAGE', {
        orgImageId: id, 
        base64: obj.base64, 
        file: obj.file, 
        zIndex: this.index + 1, 
        itemId: this.index, 
      })
      this.imageIndex = id
    },
    showButtons(){
      this.active = true; 
    },
    hideButtons(){
      this.active = false; 
    },
    editPhoto() {
      this.$emit('onEdit', {imageIndex: this.imageIndex, itemIndex: this.index})
    },
    toFront(){
      this.$store.commit('CHANGE_Z_TO_TOP', this.index)
      this.$forceUpdate()
    },
    toBack(){
      this.$store.commit('CHANGE_Z_TO_BOTTOM', this.index)
      this.$forceUpdate()
    },
    resize(newRect) {
      var obj = {width: newRect.width, height: newRect.height, top: newRect.top, left: newRect.left}
      this.$store.commit('RESIZE_ELEMENT', {newSize: obj, idx: this.index})
      this.$forceUpdate()
    },
    deleteElement(){
      this.$store.commit('DELETE_ELEMENT', this.index)
      this.$forceUpdate()
    }
  },
  computed: {
    zIndex() {
      var obj = this.$store.getters.getElementFromCurrentPage(this.index) 
      return obj ? obj.zIndex : this.index
    },
    width(){
      var obj = this.$store.getters.getElementFromCurrentPage(this.index) 
      return obj ? obj.width : this.index
    },
    height(){
      var obj = this.$store.getters.getElementFromCurrentPage(this.index) 
      return obj ? obj.height : this.index
    },
    top(){
      var obj = this.$store.getters.getElementFromCurrentPage(this.index) 
      return obj ? obj.top : this.index
    },
    left(){
      var obj = this.$store.getters.getElementFromCurrentPage(this.index) 
      return obj ? obj.left : this.index
    },
    photosFromPage() {
      return this.$store.getters['getPhotosFromPage']
    },
    images() {
      return this.$store.getters['getPhotos']
    },
    image(){
      var obj = this.$store.getters.getElementFromCurrentPage(this.index) 
      return obj.base64
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
