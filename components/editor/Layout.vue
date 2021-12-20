<template>
    <div class="horizontal-scrollable mb-3">
      <b-row>
        <div class="preview-div" v-for="(item, index) in layouts" :key="index">
            <b-img 
                v-if="item" 
                :src="require('~/assets/layouts/' + item)" 
                :id="index"
                @click="updateLayout"
            />
        </div>
      </b-row>
    </div>
</template>

<script>
export default {
    data(){
        return {
            layouts: [],
        }
    },
    methods: {
        addImages(){
            for(var i=1; i < 9; i++){
                var image = 'layout' + i + '.jpg'
                this.layouts.push(image)
            }
        },
        updateLayout(e){
            var id = Number(e.target.id) + 1
            if(this.currentLayout == id){
                return
            }
            this.$store.commit('UPDATE_LAYOUT', id)
            var elements = this.$store.getters.getElementsFromLayout(id)
            elements.forEach((element) => {
                this.$store.commit('ADD_LAYOUT_ELEMENT', element)
            })
            console.log('id', id)
            console.log('currentLayout', this.currentLayout)
        },
    },
    computed: {
        currentPage() {
            return this.$store.getters['getCurrentPage']
        },
        currentLayout(){
            return this.$store.getters['getCurrentLayout']
        }
    },
    mounted() {
        this.addImages()
    },
}
</script>

<style lang="scss">

</style>