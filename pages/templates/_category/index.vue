<template>
    <div class="container templates">
        <Templates :templates="templates" :category="category"/>
    </div>
</template>

<script>
export default {
    data() {
        return{
            category: ''
        }
    },
    computed: {
        templates() {
            this.category = this.$route.params.category
            return this.$store.getters.getTemplatesByCategory(this.$route.params.category);
        }
    }
}
</script>
