<template>
  <div class="login d-flex justify-content-center align-items-center py-5">
    <b-card>
      <h1 class="mb-5">REJESTRACJA</h1>
      <AuthForm :errors="errors" textOnButton="Utwórz konto" :submitForm="registerUser" :hasName="true"/>
    </b-card>
  </div>
</template>

<script>
import AuthForm from '~/components/AuthForm.vue'

export default {
  data() {
    return {
      errors: {}
    }
  },
  components: {
    AuthForm
  },
  methods: {
    registerUser(userInfo) {
      if(!userInfo.email || !userInfo.password || !userInfo.name) {
        this.errors = {}
        if(!userInfo.email) {
          this.errors.email = ['E-Mail jest wymagany']
        }
        if(!userInfo.password) {
          this.errors.password = ['Hasło jest wymagane']
        }
        if(!userInfo.name) {
          this.errors.name = ['Nazwa jest wymagana']
        }
        return
      }
      this.$axios.post('/api/auth/register/', {
        email: userInfo.email,
        name: userInfo.name,
        password: userInfo.password,
        password_confirmation: userInfo.password
      }).then(response => {
        this.$auth.loginWith('local', {data: {email: userInfo.email, password: userInfo.password}}).then(res => {
          this.$router.push('/')})
      }).catch(err => {
        if(err.response.data.errors) {
          this.errors = err.response.data.errors
          if(err.response.data.errors.password)
            this.errors.password = ['Hasło musi mieć co najmniej 6 znaków']
          if(err.response.data.errors.email)
            this.errors.email = ['E-mail musi być prawidłowym adresem e-mail']
          if(err.response.data.errors.name)
            this.errors.name = ['Nazwa musi mieć od 2 do 100 znaków']
        }
      })
    }
  }
}
</script>
