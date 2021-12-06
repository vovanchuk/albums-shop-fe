<template>
    <div>
        <div class="horizontal-scrollable mb-3">
          <b-row>
            <div class="preview-div add">
              <b-icon icon="plus-square" @click="addElement"></b-icon>
              Dodaj miejsce <br/> na zdjęcie
            </div>
            <div class="preview-div" v-for="(item, index) in images" :key="index">
              <b-img 
                v-if="item.base64" 
                :src="item.base64" 
                :id="index"
                draggable="true"
                @dragstart="drag"
                />
              <div class="buttons d-flex ">
                <b-button variant="outline-primary" @click="deleteImage(index)">
                  <b-icon icon="x"></b-icon>
                </b-button>
              </div>
            </div>
          </b-row>
        </div>
        <b-form-file
          placeholder="Dodaj lub przeciągnij zdjęcie"
          :file-name-formatter="formatNames"
          drop-placeholder="Upuść plik tutaj"
          accept=".jpg, .png"
          browse-text="Przeglądaj zdjęcia"
          @change="processUpload"
          multiple
        ></b-form-file>
    </div>
</template>

<script>
export default {
  methods: {
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
    drag(e) {
      e.dataTransfer.setData("text", e.target.id);
    },
    formatNames() {
      var files = this.$store.getters['getPhotos']
      return files.length === 0 ? 'Dodaj lub przeciągnij zdjęcie' : `Liczba dodanych zdjęć: ${files.length}`
    },
    addElement(){
      this.$store.commit('ADD_ELEMENT', 'image')
    }
  },
  computed: {
    images() {
      return this.$store.getters['getPhotos']
    },
  }
}
</script>
<style lang="scss">
  .add{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    svg{
      width: 150px;
      height: 30px;
    }
  }
</style>