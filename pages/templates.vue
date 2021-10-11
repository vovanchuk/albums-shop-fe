<template>
    <div class="container">
        <div class="select my-5">
            <b-form-select v-model="selected" :options="options"></b-form-select>
        </div>
        <div class="templates">
          <Templates v-if="selected === 'wedding'" :templates="allTemplates.wedding" />
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: 'wedding',
        options: [
            { value: 'wedding', text: 'Ślubne' },
            { value: 'ocasion', text: 'Okazjonalne' },
            { value: 'trip', text: 'Podróżnicze' },
            { value: 'kids', text: 'Dziecięce' },
            { value: 'birthday', text: 'Urodzinowe'},
            { value: 'person', text: 'Dla specjalnej osoby'}
        ],
        allTemplates: {
          'wedding': [
            { id: 1, url: 'wedding-template.jpg', title: 'Minimalistyczny'},
            { id: 2, url: 'wedding-pastel.jpg', title: 'Pastelowy'},
            { id: 3, url: 'wedding-bw.jpg', title: 'Czarno-biały'},
            { id: 4, url: 'wedding-vintage.jpg', title: 'Vintage'},
            { id: 5, url: 'wedding-rustic.jpg', title: 'Rustykalny'},
            { id: 6, url: 'wedding-modern.jpg', title: 'Nowoczesny'},
          ],
        }
      }
    }
  }
</script>