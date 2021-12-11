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
            this.$store.commit('UPDATE_LAYOUT', id)
            var elements = this.$store.getters.getElementsFromLayout(id)
            elements.forEach((element) => {
                this.$store.commit('ADD_LAYOUT_ELEMENT', element)
            })
        },
    },
    computed: {
        currentPage() {
            return this.$store.getters['getCurrentPage']
        },
    },
    mounted() {
        this.addImages()
    },
}
</script>

<style lang="scss">

</style>