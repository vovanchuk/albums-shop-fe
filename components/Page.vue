<template>
    <div class="page">
        <div class="canvas mt-3" :ref="index" v-if="active" :style="[ bgImage !== 'color' ? {'background-image': 'url(' + bgImage + ')'} : {'background-color': bgColor}]">
            <DragItem v-for="(item, idx) in images" ref="elements" :key="idx" :index="idx" @onEdit="editPhoto"/>
            <DragText v-for="(item, idx) in textFields" :key="idx" :index="idx"/>
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
            type: Number
        }
    },
    methods: {
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
            if(this.index == this.currentPage)
                return true
            return false
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