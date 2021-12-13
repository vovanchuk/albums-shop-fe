<template>
    <div class="horizontal-scrollable mb-3">
      <b-row>
        <div class="bg preview-div">
            <chrome-picker v-model="color" @input="updateValue"/>
        </div>
        <div class="preview-div" v-for="(item, index) in frames" :key="index">
            <b-img 
                v-if="item" 
                :src="require('~/assets/images/frames/' + item)" 
                :id="index"
                @click="updateFrame"
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
            frames: [],
            color: '#000'
        }
    },
    methods: {
        addImages(){ 
            for(var i=1; i < 7; i++){
                var frame = 'frame' + i + '.jpg'
                this.frames.push(frame)
            }
        },
        updateFrame(e){
            this.$store.commit('SET_FRAME', e.target.id)
        },
        updateValue(){
            this.$store.commit('UPDATE_FRAME_COLOR', this.color.hex)
        }
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
    .bg{
       display: flex;
       align-items: center;
       justify-content: center;
       max-height: 150px;
       max-width: 150px;
    }  
    .vc-chrome-body .vc-chrome-fields-wrap{
        display: none;
    }
    .vc-chrome-body .vc-chrome-controls .vc-chrome-sliders{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .vc-chrome-body .vc-chrome-controls .vc-chrome-sliders .vc-chrome-alpha-wrap{
        display: none;
    }
</style>