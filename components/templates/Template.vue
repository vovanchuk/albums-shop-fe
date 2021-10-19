<template>
    <div class="d-flex flex-column">
        <b-img :src="require('../../assets/images/' + template.url)" ></b-img>
        <nuxt-link v-if="category === 'main'" class="mt-2" :to="`/templates/${template.category}`">{{template.title}}</nuxt-link>
        <nuxt-link v-else class="mt-2" :to="`/templates/${category}/${template.id}`">{{template.title}}</nuxt-link>
        </div>
</template>

<script>
  export default {
    props: {
      template: {
        type: Object
      },
      category: {
        type: String,
        require: true
      }
    },
  }
</script>