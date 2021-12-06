<template>
    <div class="horizontal-scrollable mb-3">
      <b-row>
        <div class="preview-div bg">
            <chrome-picker v-model="color" @input="updateValue"/>
        </div>
        <div class="preview-div" v-for="(item, index) in backgrounds" :key="index">
            <b-img 
                v-if="item" 
                :src="require('~/assets/backgrounds/' + item)" 
                :id="index"
                @click="updateBackground"
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
            backgrounds: [],
            color: '#fff'
        }
    },
    methods: {
        addImages(){
            for(var i=1; i < 10; i++){
                var image = 'bg' + i + '.jpg'
                this.backgrounds.push(image)
            }
        },
        updateBackground(e){
            this.$store.commit('UPDATE_BG_IMAGE', e.target.src)
        },
        updateValue(){
            this.$store.commit('UPDATE_BG_COLOR', this.color.hex)
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
    }  
    .vc-chrome-body .vc-chrome-fields-wrap{
        display: none;
    }

</style>