<template>
    <div class="page">
        <div class="canvas mt-3" :ref="index" v-if="active" :style="[ bgImage !== 'color' ? {'background-image': 'url(' + bgImage + ')'} : {'background-color': bgColor}]">
            <DragItem v-for="item in images" ref="elements" :key="item.id" :index="item.id" @onEdit="editPhoto"/>
            <DragText v-for="item in textFields" :key="item.id" :index="item.id" @onEdit="onTextEdit(item.id)"/>
        </div>
    </div>
</template>

<script>
import DragItem from "~/components/editor/DragItem";
import DragText from "~/components/editor/DragText";
export default {
    components: {DragItem, DragText},
    props: {
        index: {
            type: String
        }
    },
    methods: {
      onTextEdit(id) {
        this.$emit('setCurrent', id)
      },
        editPhoto(data){
            this.$emit('onEdit', {imageIndex: data.imageIndex, itemIndex: data.itemIndex})
        },
    },
    computed: {
        currentPage() {
            return this.$store.getters['getCurrentPage']
        },
        images(){
            return this.$store.getters['getPhotosFromPage']
        },
        textFields(){
            return this.$store.getters['getTextFieldsFromPage']
        },
        active(){
          return +this.index === this.currentPage
        },
        bgImage() {
            return this.$store.getters['getPageBackgroundImage']
        },
        bgColor(){
            return this.$store.getters['getPageBackgroundColor']
        }
    },
}
</script>

<style>
    .canvas{
        background-position: center;
        background: no-repeat;
        background-size: cover;
    }
</style>
