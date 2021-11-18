<template>
  <vue-drag-resize
    :isActive="true"
    :w="200"
    :h="200"
    @resizing="resize"
    @dragging="resize"
    :parentLimitation="true"
  >
    <div class="wrapper" :style="{backgroundImage: `url(${image.base64})`}">
      <b-button @click="onAddImage">Add Image</b-button>

      <ImagePicker
        v-model="showModal"
        @choose="onImagePicked"
      />
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
    }
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
}
</style>
