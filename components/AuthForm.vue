<template>
    <b-form>
        <b-form-group v-if="hasName">
            <b-form-input type="text" placeholder="Nazwa użytkownika" v-model="userInfo.name"></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-input type="email" placeholder="Email" v-model="userInfo.email"></b-form-input>
        </b-form-group>
        <b-form-group>
            <b-form-input type="password" placeholder="Hasło" v-model="userInfo.password"></b-form-input>
        </b-form-group>
        <b-button @click="submitForm(userInfo)" block variant="outline-primary">{{textOnButton}}</b-button>
    </b-form>
</template>

<script>
export default {
    data() {
        return {
            userInfo: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    props: {
        submitForm: {
            type: Function,
            require: true
        },
        textOnButton: {
            type: String,
            require: true
        },
        hasName: {
            type: Boolean,
            default: false,
            require: false
        }
    }
}
</script>