<template>
    <div class="d-flex flex-wrap justify-content-center ">
      <div class="one-template" v-for="template in templates" v-bind:key="template.id">
        <Template :template="template" :category="category"/>
      </div>
    </div>
</template>

<script>
import Template from './Template.vue'
  export default {
    components: { Template },
    props: {
      templates: {
        type: Array,
        require: true
      },
      category: {
        type: String,
        require: true        
      }
    }
  }
</script>