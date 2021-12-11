<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <Page
        v-for="(page, idx) in pages"
        :key="idx"
        :index="idx"
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
          {{ currentPage + 1 }}
        </b-button>
        <b-button @click="nextPage">
          <b-icon icon="chevron-compact-right"></b-icon>
        </b-button>
      </b-button-group>
    </div>
    <TextEditModal
      v-if="textModalOpen"
      v-model="textModalOpen"
      :text.sync="currentText"
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
  methods:{
    onTextEdit(id) {
      this.currentItemIndex = id
      this.textModalOpen = true
    },
    previousPage(){
      if(this.currentPage === 0)
        return
      var number = this.currentPage - 1
      this.$store.commit('CHANGE_CURRENT_PAGE', number)
    },
    nextPage(){
      if(this.currentPage === Object.keys(this.pages).length - 1)
        return
      var number = this.currentPage + 1
      this.$store.commit('CHANGE_CURRENT_PAGE', number)
    },
    addPage() {
      this.$store.commit('ADD_PAGE')
      this.$forceUpdate()
    },
    removePage(){
      if(Object.keys(this.pages).length === 1)
        return
      var number
      if(this.currentPage === 0)
        number = this.currentPage
      else
        number = this.currentPage - 1
      this.$store.commit('REMOVE_PAGE', number)
    },
    async updateImage(e) {
      const base64Image = this.$refs['modal'].$refs['tuiImageEditor'].invoke('toDataURL')
      const currentImage = this.$store.getters.getElementFromCurrentPage(this.currentItemIndex)
      const filename = currentImage.file
      const newObj = {
        base64: base64Image,
        file: await this.dataUrlToFile(base64Image, filename)
      }
      this.$store.commit('UPDATE_IMAGE_FROM_PAGE_BY_INDEX', {newObj, idx: this.currentItemIndex})
    },
    async dataUrlToFile(dataUrl, fileName) {
      const res = await fetch(dataUrl);
      const blob = await res.blob();
      return new File([blob], fileName, {type: 'image/png'});
    },
    setCurrentImageIndex(data) {
      this.currentItemIndex = data.itemIndex
      this.$bvModal.show('modal')
    }
  },
  computed: {
    currentPage() {
      return this.$store.getters['getCurrentPage']
    },
    pages() {
      return this.$store.getters['getPages']
    },
    currentImage() {
      return this.$store.getters.getElementFromCurrentPage(this.currentItemIndex)
    },
    imagesFromPage() {
      return this.$store.getters['getPhotosFromPage']
    },
    currentText: {
      get() {
        return this.currentImage?.type === 'text' ? this.currentImage.text : null
      },
      set(newVal) {
        if (this.currentImage?.type === 'text') {
          this.$store.commit('UPDATE_ELEMENT', {
            id: this.currentItemIndex,
            newEl: {...this.currentImage, ...{text: newVal}}
          })
          this.$forceUpdate()
        }
      }
    }
  }
}
</script>

<style lang="scss">
.tui-image-editor-header {
  display: none;
}
</style>
