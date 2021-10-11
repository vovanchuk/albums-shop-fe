<template>
    <div class="d-flex flex-wrap justify-content-center ">
      <div class="one-template" v-for="template in templates" v-bind:key="template.id">
        <b-img :src="require('../assets/images/' + template.url)" ></b-img>
        <p class="mt-2">{{template.title}}</p>
      </div>
    </div>
</template>

<script>
  export default {
    props: ['templates'],
  }
</script>