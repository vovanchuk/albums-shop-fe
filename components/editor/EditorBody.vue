<template>
  <div class="container">
    <div>
      <Page v-for="(page, idx) in pages" :key="idx" :index="idx" ref="pages" @onEdit="setCurrentImageIndex"/>
    </div>
    <div class="d-flex justify-content-center">
      <b-button-group class="mt-3 mb-3 align-items-center">
        <b-button @click="previousPage">
          <b-icon icon="chevron-compact-left"></b-icon>
        </b-button>
        <b-button disabled>
          {{currentPage}}
        </b-button>
        <b-button @click="nextPage">
          <b-icon icon="chevron-compact-right"></b-icon>
        </b-button>
      </b-button-group>
    </div>
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
        <EditPhoto ref="modal" :image="currentImage.base64"/>
      </div>
    </b-modal>
  </div>
</template>

<script>

export default {
  data() {
    return {
      currentItemIndex: null,
      currentImageIndex: null,
    }
  },
    methods:{
    previousPage(){
      if(this.currentPage === 1)
        return
      var number = this.currentPage - 1
      this.$store.commit('CHANGE_CURRENT_PAGE', number)
    },
    nextPage(){
      if(this.currentPage === 3)
        return
      var number = this.currentPage + 1
      this.$store.commit('CHANGE_CURRENT_PAGE', number)
    },
    async updateImage(e) {
      const base64Image = this.$refs['modal'].$refs['tuiImageEditor'].invoke('toDataURL')
      var element = this.$refs['pages'][this.currentPage-1].$refs['elements'][this.currentItemIndex-1].$refs[this.currentItemIndex]
      var urlString = 'url(' + base64Image + ')'
      element.style.backgroundImage = urlString

      const currentImage = this.$store.getters.getPhotoFromCurrentPage(this.currentItemIndex)
      const filename = currentImage.file
      const newObj = {
        base64: base64Image,
        file: await this.dataUrlToFile(base64Image, filename)
      }
      this.$store.commit('UPDATE_IMAGE_FROM_PAGE_BY_INDEX', {newObj, idx: this.currentItemIndex})
      this.$forceUpdate()
    },
    async dataUrlToFile(dataUrl, fileName) {
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      return new File([blob], fileName, {type: 'image/png'});
    },
    setCurrentImageIndex(data){
      this.currentImageIndex = data.imageIndex
      this.currentItemIndex = data.itemIndex
      this.$bvModal.show('modal')
    },
  },
  computed: {
    currentPage() {
      return this.$store.getters['getCurrentPage']
    },
    pages() {
      return this.$store.getters['getPages']
    },
    currentImage() {
      var obj = this.$store.getters.getElementFromCurrentPage(this.currentItemIndex) 
      return obj ? obj : ''
    },
    imagesFromPage() {
      return this.$store.getters['getPhotosFromPage']
    },
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
  border: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
