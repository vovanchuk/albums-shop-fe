<template>
  <vue-drag-resize
    :w="element.width"
    :h="element.height"
    :z="element.zIndex"
    :x="element.left"
    :y="element.top"
    :minw="150"
    :minh="150"
    @resizing="resize"
    @dragging="resize"
    :parentLimitation="true"
    @activated="showButtons"
    @deactivated="hideButtons"
  >
    <div class="wrapper" @drop="drop" @dragover="allowDrop" :style="[ element.base64 ? {'background-image': 'url(' + element.base64  + ')'} : {'background-color': 'lightgray'}]">
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
      type: String
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
      var obj = this.images[id]
      this.$store.commit('ADD_IMAGE_TO_PAGE', {
        orgImageId: id, 
        base64: obj.base64, 
        file: obj.file, 
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
  computed: {
    element(){
      return this.$store.getters.getElementFromCurrentPage(this.index) 
    },
    images() {
      return this.$store.getters['getPhotos']
    },
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
