<template>
  <div class="container">
    <div class="horizontal-scrollable mb-3">
      <b-row class="mb-3">
        <div class="preview-div" v-for="(item, index) in images" :key="index">
          <b-img 
            v-if="item.base64" 
            :src="item.base64" 
            draggable="true"
            v-on:dragstart="drag"
            />
          <div class="buttons d-flex justify-content-end">
            <b-button variant="outline-primary" class="mr-1" @click="setCurrentImageIndex(index)">
              <b-icon icon="pencil"></b-icon>
            </b-button>
            <b-button variant="outline-primary" @click="deleteImage(index)">
              <b-icon icon="x"></b-icon>
            </b-button>
          </div>
        </div>
      </b-row>
    </div>
    <b-form-file
      placeholder="Choose a file or drop it here..."
      drop-placeholder="Drop file here..."
      accept=".jpg, .png"
      @change="processUpload"
      multiple
    ></b-form-file>
    <div class="canvas">
        <DragItem v-for="(idx) in DRAG_LIMIT" :key="idx" />
    </div>
    <div>
      <b-modal
        id="modal"
        title="Edytuj zdjęcie"
        size="xl"
        ok-title="Zatwierdź zmiany"
        ok-variant="outline-primary"
        cancel-title="Anuluj"
        @ok="updateImage"
      >
        <div class="d-flex justify-content-center">
          <EditPhoto ref="modal" :image="currentImage"/>
        </div>
      </b-modal>
    </div>
  </div>
</template>

<script>
const DRAG_LIMIT = 5
import DragItem from "~/components/editor/DragItem";
export default {
  components: {DragItem},
  data() {
    return {
      // previews: [],
      currentImageIndex: null,
      DRAG_LIMIT: DRAG_LIMIT
    }
  },
  methods: {
    async updateImage(e) {
      const base64Image = this.$refs['modal'].$refs['tuiImageEditor'].invoke('toDataURL')
      const currentImage = this.images[this.currentImageIndex]
      const filename = currentImage.file

      const newObj = {
        base64: base64Image,
        file: await this.dataUrlToFile(base64Image, filename)
      }

      this.$store.commit('UPDATE_IMAGE_BY_INDEX', {newObj, idx: this.currentImageIndex})
      this.$forceUpdate()
    },
    async dataUrlToFile(dataUrl, fileName) {
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      return new File([blob], fileName, {type: 'image/png'});
    },
    processUpload(e) {
      const files = e.target.files;
      if (files && files.length > 0) {
        Array.from(files).forEach(file => {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.$store.commit('ADD_IMAGE', {
              base64: e.target.result,
              file: file
            })
          }
          reader.readAsDataURL(file);
        })
      }
    },
    deleteImage(index) {
      this.$store.commit('DELETE_IMAGE_BY_INDEX', index)
    },
    setCurrentImageIndex(idx) {
      this.currentImageIndex = idx
      this.$bvModal.show('modal')
    },
    drag(e) {
      e.dataTransfer.setData("text", e.target.src);
    },
  },
  computed: {
    currentImage() {
      return this.images[this.currentImageIndex]?.base64 || ''
    },
    images() {
      console.log('newimages')
      return this.$store.getters['getPhotos']
    }
  }
}
</script>

<style lang="scss">
.tui-image-editor-header {
  display: none;
}

.canvas {
  height: 600px;
  width: 100%;
  position: relative;
}
</style>
