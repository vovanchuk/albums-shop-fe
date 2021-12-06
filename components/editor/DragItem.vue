<template>
  <vue-drag-resize
    :w="200"
    :h="200"
    :z="this.zIndex"
    @resizing="resize"
    @dragging="resize"
    :parentLimitation="true"
    @activated="showButtons"
    @deactivated="hideButtons"
  >
    <div class="wrapper" :ref="index" @drop="drop" @dragover="allowDrop" style="background-color:lightgray">
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
      imageIndex: null,
    }
  },
  methods: {
    resize(newRect) {
      this.width = newRect.width;
      this.height = newRect.height;
      this.top = newRect.top;
      this.left = newRect.left;
    },
    allowDrop(e) {
      e.preventDefault();
    },
    drop(e) {
      e.preventDefault();
      var id = e.dataTransfer.getData("text");
      var url = this.images[id].base64
      var urlString = 'url(' + url + ')'
      e.target.style.backgroundImage = urlString;
      this.active = true; 
      var obj = this.images[id]
      this.$store.commit('ADD_IMAGE_TO_PAGE', {id: id, base64: obj.base64, file: obj.file, zIndex: this.index, itemId: this.index})
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
    }
  },
  computed: {
    zIndex() {
      var obj = this.$store.getters.getElementFromCurrentPage(this.index) 
      return obj ? obj.zIndex : this.index
    },
    photosFromPage() {
      return this.$store.getters['getPhotosFromPage']
    },
    images() {
      return this.$store.getters['getPhotos']
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
