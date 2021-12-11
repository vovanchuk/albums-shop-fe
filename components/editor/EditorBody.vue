<template>
  <div class="container">
    <div>
      <Page
        v-for="(page, idx) in pages"
        :key="idx"
        :index="idx"
        ref="page"
        @onEdit="setCurrentImageIndex"
        @setCurrent="onTextEdit"
      />
    </div>
    <div class="d-flex justify-content-between align-items-center mt-3 mb-3 ">
      <div>
        <b-button variant="link" @click="addPage">Dodaj stronę</b-button>
        <b-button variant="link" @click="removePage">Usuń stronę</b-button>
      </div>
      <b-button-group class="align-items-center">
        <b-button @click="previousPage">
          <b-icon icon="chevron-compact-left"></b-icon>
        </b-button>
        <b-button disabled>
          {{ currentPage }}
        </b-button>
        <b-button @click="nextPage">
          <b-icon icon="chevron-compact-right"></b-icon>
        </b-button>
      </b-button-group>
      <div>
        <b-button variant="link">Akcja 1</b-button>
        <b-button variant="link">Akcja 2</b-button>
      </div>
    </div>
    <TextEditModal
      v-if="textModalOpen"
      v-model="textModalOpen"
      :text="currentText"
    ></TextEditModal>
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

import TextEditModal from "~/components/editor/TextEditModal";

export default {
  components: {TextEditModal},
  data() {
    return {
      currentItemIndex: null,
      textModalOpen: false,
    }
  },
  methods: {
    onTextEdit(id) {
      console.log('asdzxc')
      this.currentItemIndex = id
      this.textModalOpen = true
    },
    previousPage() {
      if (this.currentPage === 1)
        return
      var number = this.currentPage - 1
      this.$store.commit('CHANGE_CURRENT_PAGE', number)
    },
    nextPage() {
      if (this.currentPage === Object.keys(this.pages).length)
        return
      var number = this.currentPage + 1
      this.$store.commit('CHANGE_CURRENT_PAGE', number)
    },
    addPage() {
      this.$store.commit('ADD_PAGE')
      this.$forceUpdate()
    },
    removePage() {
    },
    async updateImage(e) {
      console.log(this.$refs['page'][this.currentPage - 1].$refs['elements'][this.currentItemIndex - 1].$refs[this.currentItemIndex])
      const base64Image = this.$refs['modal'].$refs['tuiImageEditor'].invoke('toDataURL')
      var element = this.$refs['page'][this.currentPage - 1].$refs['elements'][this.currentItemIndex - 1].$refs[this.currentItemIndex]
      var urlString = 'url(' + base64Image + ')'
      element.style.backgroundImage = urlString

      const currentImage = this.$store.getters.getElementFromCurrentPage(this.currentItemIndex)
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
    setCurrentImageIndex(data) {
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
    currentText() {
      return this.currentImage?.type === 'text' ? this.currentImage.text : null
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
  border: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
