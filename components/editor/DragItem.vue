<template>
  <vue-drag-resize
    :w="item.width"
    :h="item.height"
    :z="item.zIndex"
    :x="item.left"
    :y="item.top"
    :minw="130"
    :minh="130"
    :isActive="item.active"
    @resizing="resize"
    @dragging="resize"
    :parentLimitation="true"
    @activated="showButtons"
    @deactivated="hideButtons"
  >
    <div class="wrapper" @drop="drop" @dragover="allowDrop" 
    :style="[ item.base64 ? {'background-image': 'url(' + item.base64  + ')'} : {'background-color': 'lightgray'}, 
              item.frame ? { 'border-width' : item.frame.width, 'border-style' : item.frame.style, 'border-color': item.frameColor, 'border-radius': item.frame.radius} : '']">
      <b-button-group v-show="item.active">
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
    allowDrop(e) {
      e.preventDefault();
    },
    drop(e) {
      e.preventDefault();
      if(e.dataTransfer.getData("index")){
       var id = e.dataTransfer.getData("index")
       var obj = this.images[id]
       this.$store.commit('ADD_IMAGE_TO_PAGE', {
         orgImageId: id,
         base64: obj.base64,
         file: obj.file,
         itemId: this.index,
       })
       this.imageIndex = id
      }
    },
    showButtons(){
      this.$store.commit('SET_ACTIVE', this.index)
    },
    hideButtons(){
      this.$store.commit('UNSET_ACTIVE', this.index)
    },
    editPhoto() {
      this.$emit('onEdit', {imageIndex: this.imageIndex, itemIndex: this.index})
    },
    toFront(){
      this.$store.commit('CHANGE_Z_TO_TOP', this.index)
    },
    toBack(){
      this.$store.commit('CHANGE_Z_TO_BOTTOM', this.index)
      console.log(this.item.frame)
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
