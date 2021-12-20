<template>
    <div class="my-5">
        <h1>{{template.title}}</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Gravida dui etiam proin sit nec tortor. Faucibus nunc, nisl, neque vulputate interdum pellentesque vulputate. Turpis senectus justo vitae gravida leo viverra. Vitae facilisi sit ac, eget consectetur commodo, nam. Dui nullam morbi at euismod accumsan, ultricies.
        </p>
        <b-row>
            <b-col lg>
                <b-img :src="require('../assets/images/' + template.url)" fluid></b-img>        
            </b-col>
            <b-col class="d-flex flex-column justify-content-between">
                <div class="mt-3">
                    <b-form-group label="Rozmiar">
                        <b-form-radio-group id="size">
                            <b-form-radio v-model="pageFormat" value="1">20x30</b-form-radio>
                            <b-form-radio v-model="pageFormat" value="2">30x20</b-form-radio>
                            <b-form-radio v-model="pageFormat" value="3">30x30</b-form-radio>
                        </b-form-radio-group>
                    </b-form-group>
                    <b-form-group label="Liczba stron">
                        <b-form-radio-group id="pages">
                            <b-form-radio v-model="pagesNumber" value="10">10</b-form-radio>
                            <b-form-radio v-model="pagesNumber" value="20">20</b-form-radio>
                        </b-form-radio-group>
                    </b-form-group>
                </div>
                <div>
                    <b-button 
                        :to="{ name: 'editor', params: { pagesNumber: pagesNumber, pageFormat: pageFormat, coverUrl: coverUrl}}" 
                        block variant="outline-primary mt-3" 
                        :disabled="disabled" 
                        >Dostosuj szablon
                    </b-button>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
  export default {
    props: ['template'],
    data(){
        return {
            pagesNumber: 0,
            pageFormat: 0,
            coverUrl: '_nuxt/assets/images/' + this.template.url
        }
    },
    computed: {
        disabled(){
            if(this.pagesNumber !== 0 && this.pageFormat !== 0 )
                return false
            return true
        }
    }
  }
</script>
<style lang="scss">
    .btn-outline-primary.disabled{
        color: #B28530;
    }
</style>