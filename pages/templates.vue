<template>
    <div class="container">
        <div class="select my-5">
            <b-form-select v-model="selected" :options="options"></b-form-select>
        </div>
        <div class="templates">
          <Templates :templates="allTemplates[selected]" :category="selected"/>
        </div>
    </div>
</template>

<script>
  export default {
    computed: {
      allTemplates() {
        return this.$store.state.templates.allTemplates
      }
    },
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

      }
    }
  }
</script>