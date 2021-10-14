<template>
    <div class="d-flex flex-column">
        <b-img :src="require('../assets/images/' + url)" ></b-img>
        <nuxt-link v-if="category === 'main'" class="mt-2" :to="'/templates'">{{title}}</nuxt-link>
        <nuxt-link v-else class="mt-2" :to="{ name: 'details', params: { title: title, url: url }}">{{title}}</nuxt-link>
        </div>
</template>

<script>
  export default {
    props: {
        url: {
            type: String,
            require: true
        },
        title: {
            type: String,
            require: true
        },
        category: {
          type: String,
          require: true        
      }
    },
  }
</script>