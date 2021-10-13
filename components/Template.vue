<template>
    <div class="d-flex flex-column">
        <b-img :src="require('../assets/images/' + url)" ></b-img>
        <b-link class="mt-2" href="/details">{{title}}</b-link>
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
        }
    },
  }
</script>