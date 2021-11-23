<template>
  <vue-drag-resize
    :isActive="true"
    :w="200"
    :h="200"
    @resizing="resize"
    @dragging="resize"
    :parentLimitation="true"
  >
    <!--<div class="wrapper" :style="{backgroundImage: `url(${image.base64})`}">
      <b-button @click="onAddImage">Add Image</b-button>

      <ImagePicker
        v-model="showModal"
        @choose="onImagePicked"
      />
    </div>-->
    <div class="wrapper" v-on:drop="drop" v-on:dragover="allowDrop" style="background-color:lightgray">
    </div>
  </vue-drag-resize>
</template>

<script>
import ImagePicker from "~/components/editor/ImagePicker";
export default {
  components: {ImagePicker},
  data() {
    return {
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      showModal: false,
      image: {},
    }
  },
  methods: {
    onImagePicked(image) {
      this.image = image
    },
    resize(newRect) {
      this.width = newRect.width;
      this.height = newRect.height;
      this.top = newRect.top;
      this.left = newRect.left;
    },
    onAddImage() {
      this.showModal = true
    },
    allowDrop(e) {
        e.preventDefault();
    },
    drop(e) {
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        var urlString = 'url(' + data +')'
        e.target.style.backgroundImage = urlString;
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
</style>
