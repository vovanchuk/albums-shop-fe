<template>
    <div class="login d-flex justify-content-center align-items-center py-5">
        <b-card>
            <h1 class="mb-5">REJESTRACJA</h1>
            <AuthForm textOnButton="Utwórz konto" :submitForm="registerUser" :hasName="true"/>
        </b-card>
    </div>
</template>

<script>
import AuthForm from '~/components/AuthForm.vue'
export default {
    components: {
        AuthForm
    },
    methods: {
        registerUser() {
        }
    }
}
</script>