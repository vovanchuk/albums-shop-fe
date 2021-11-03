<template>
    <div class="container">
        <div class="horizontal-scrollable mb-3">
            <b-row class="mb-3">
                <div class="preview-div" v-for="item, index in previews" :key="index">
                    <b-img :src="item"/>
                    <div class="buttons d-flex justify-content-end">
                        <b-button variant="outline-primary" class="mr-1" @click="editImage(item)">
                            <b-icon icon="pencil" ></b-icon>
                        </b-button>
                        <b-button variant="outline-primary" @click="deleteImage(index)">
                            <b-icon icon="x"></b-icon>
                        </b-button>
                    </div>
                </div>
            </b-row>
        </div>
        <b-form-file
          v-model="images"
          placeholder="Choose a file or drop it here..."
          drop-placeholder="Drop file here..."
          accept=".jpg, .png"
          @change="previewImages"
          multiple
        ></b-form-file>
        <div>        
            <b-modal 
                id="modal" 
                title="Edytuj zdjęcie" 
                size="xl"
                ok-title="Zatwierdź zmiany"
                ok-variant="outline-primary"
                cancel-title="Anuluj"
                >
                    <div class="d-flex justify-content-center">
                        <EditPhoto :image="imageToEdit"/>
                    </div>
            </b-modal>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            previews: [],
            images: [],
            imageToEdit: null
        }
    },
    methods: {
        previewImages(event) {
            var files = event.target.files;
            var counter = files.length;
            if(files){
                for(var index=0 ; index < counter ; index++){
                    var reader = new FileReader();
                    reader.onload = (e) => {
                        this.previews.push(e.target.result);
                    }
                    this.images.push(files[index]);
                    reader.readAsDataURL(files[index]);
                }
            }
        },
        deleteImage(index){
            this.previews.splice(index, 1)
            this.images.splice(index, 1)
        },
        editImage(item){
            this.imageToEdit = item
            this.$bvModal.show('modal')
        }
    },
}
</script>