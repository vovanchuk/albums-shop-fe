<template>
    <div class="container details">
        <TemplateDetails v-if="template" :template="template"/>
    </div>
</template>

<script>

export default {
    computed: {
        template() {
            return this.$store.getters.getTemplateById(this.$route.params.category ,this.$route.params.id);
        }
    }
}
</script>