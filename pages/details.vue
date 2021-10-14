<template>
    <div class="container details">
        <TemplateDetails :title="title" :url="url"/>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: this.$route.params.title,
            url: this.$route.params.url
        }
    }
}
</script>