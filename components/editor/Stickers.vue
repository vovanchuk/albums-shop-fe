<template>
    <div class="horizontal-scrollable mb-3">
      <b-row>
        <div class="preview-div" v-for="(item, index) in stickers" :key="index">
            <b-img 
                v-if="item" 
                :src="require('~/assets/stickers/' + item)" 
                :id="index"
                @click="updateSticker"
            />
        </div>
      </b-row>
    </div>
</template>

<script>
import { Chrome } from 'vue-color'
export default {
    components: {     
        'chrome-picker': Chrome,
    },
    data(){
        return {
            stickers: [],
            color: '#fff'
        }
    },
    methods: {
        addImages(){
            for(var i=1; i < 12; i++){
                var sticker = 'sticker' + i + '.png'
                this.stickers.push(sticker)
            }
        },
        updateSticker(e){
            this.$store.commit('ADD_STICKER', e.target.src)
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