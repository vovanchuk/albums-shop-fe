<template>
  <div class="container">
    <div class="images d-flex">
        <b-img id="img" src="../assets/images/wedding-bw.jpg" draggable="true" v-on:dragstart="drag"/>
        <b-img id="img" src="../assets/images/wedding-modern.jpg" draggable="true" v-on:dragstart="drag"/>
    </div>
    <div class="d-flex mt-5 canvas">
        <div id="green" class="green" v-on:drop="drop" v-on:dragover="allowDrop">
            <b-button @click="cropping"></b-button>
        </div>
        <div id="red" class="red" v-on:drop="drop" v-on:dragover="allowDrop">
            <b-button @click="cropping"></b-button>
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
                <CropImage ref="modal" :image="img" :w="w" :h="h"/>
            </div>
      </b-modal>

    </div>
  </div>
</template>

<script>
import DragItem from '~/components/editor/DragItem.vue';
import CropImage from '~/components/editor/CropImage.vue';
export default {
    components: { DragItem, CropImage},
    data() {
        return {
            w: 0,
            h: 0,
            img: null,
            editedImg: null,
            parentId: 0
        }
    },
    methods: {
        drag(e) {
            e.dataTransfer.setData("text", e.target.src);
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
        resize(newRect) {
            this.width = newRect.width;
            this.height = newRect.height;
            this.top = newRect.top;
            this.left = newRect.left;
        },
        cropping(e){
            this.h = String(e.target.parentNode.offsetHeight)
            this.w = String(e.target.parentNode.offsetWidth)
            this.parentId = e.target.parentNode.id
            var img = e.target.parentNode.style.backgroundImage
            this.img = img.replace('url(','').replace(')','').replace(/\"/gi, "");
            this.$bvModal.show('modal')
        },
        updateImage(e){
            const { canvas } = this.$refs['modal'].$refs['cropper'].getResult()
            var image = canvas.toDataURL();
            this.editedImg = image
            var urlString = 'url(' + image +')'
            document.getElementById(this.parentId).style.backgroundImage = urlString
        }
    }
}
</script>


<style lang="scss">
    img{
        width: 250px;
        height: 250px;
        object-fit: cover;
    }
    .green{
        width: 400px;
        height: 200px;
        background-color: lightgreen;
    }
    .red{
        width: 200px;
        height: 400px;
        background-color: lightcoral;
    }
    .green, .red{
        background-position: center;
        background-size: cover;
    }
    .canvas {
        height: 600px;
        width: 100%;
    }
    
</style>