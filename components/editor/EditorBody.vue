<template>
  <div class="container" :style="canvasVars">
    <div class="d-flex align-items-center flex-column mt-2">
      <div v-for="(page, idx) in pages" :key="idx">
        <Page
          v-if="currentPage === idx || loading"
          :key="idx"
          :page="page"
          :index="idx"
          :pagesNumber="pagesNumber"
          @onEdit="setCurrentImageIndex"
          @setCurrent="onTextEdit"
        />
      </div>
    </div>
    <div class="d-flex align-items-center mt-3 mb-3 ">
        <b-button variant="link" @click="addPage">Dodaj stronę</b-button>
        <b-button variant="link" @click="removePage">Usuń stronę</b-button>
        <b-button variant="link" @click="generatePdf">Pobierz</b-button>
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

import TextEditModal from "~/components/editor/TextEditModal"
import * as htmlToImage from 'html-to-image'
import jsPDF from 'jspdf'

export default {
  components: {TextEditModal},
  data() {
    return {
      currentItemIndex: null,
      textModalOpen: false,
      size: {
        width: 500,
        height: 500
      }
    }
  },
  methods:{
    async generatePdf() {
      this.$store.commit('SET_LOADING', true)
      await new Promise(resolve => setTimeout(resolve, 1000))

      const elements = document.getElementsByClassName('canvas')
      const images = []

      const promises = Array.from(elements).map((element) => {
        return new Promise(resolve => {
          resolve(htmlToImage.toPng(element))
        })
      })
      for (const promise of promises) {
        const data = await Promise.resolve(promise)
        images.push(data)
      }

      var doc = new jsPDF({
        orientation: 'landscape',
        unit: 'pt',
        format: [this.size.height, this.size.width]
      });

      var width = doc.internal.pageSize.getWidth()
      var height = doc.internal.pageSize.getHeight()
      for(let i = 0; i < images.length; i++) {
        if(i !== 0) {
          doc.addPage()
        }
        doc.addImage(images[i], 'JPEG', 0, 0, width, height)
      }

      doc.save("file.pdf")
      this.$store.commit('SET_LOADING', false)
    },
    onTextEdit(id) {
      this.currentItemIndex = id
      this.textModalOpen = true
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
    canvasVars() {
      return {
        '--canvas-height': this.size.height + 'px',
        '--canvas-width': this.size.width + 'px',
      }
    },
    loading() {
      return this.$store.getters['getLoading']
    },
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
    pagesNumber(){
      return this.pages.length
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
.nav-buttons {
  .btn-secondary{
    color: #B28530;
    background-color: white;
    border: 1px solid #B28530;
  }
}
</style>
