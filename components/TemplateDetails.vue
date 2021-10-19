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
                            <b-form-radio value="15">15x15</b-form-radio>
                            <b-form-radio value="20">20x20</b-form-radio>
                            <b-form-radio value="35">35x25</b-form-radio>
                        </b-form-radio-group>
                    </b-form-group>
                    <b-form-group label="Liczba stron">
                        <b-form-radio-group id="pages">
                            <b-form-radio value="20">20</b-form-radio>
                            <b-form-radio value="40">40</b-form-radio>
                        </b-form-radio-group>
                    </b-form-group>
                    <b-form-group label="Rodzaj okładki">
                        <b-form-radio-group id="cover">
                            <b-form-radio value="hard">Twarda</b-form-radio>
                            <b-form-radio value="canvas">Płótno</b-form-radio>
                        </b-form-radio-group>                    
                    </b-form-group>
                </div>
                <div>
                    <h1>79 PLN</h1>
                    <b-button to="/editor" block variant="outline-primary mt-3">Dostosuj szablon</b-button>
                </div>
            </b-col>
        </b-row>
    </div>
</template>

<script>
  export default {
    props: ['template'],
  }
</script>