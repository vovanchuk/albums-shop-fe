<template>
  <div class="login d-flex justify-content-center align-items-center py-5">
    <b-card>
      <h1 class="mb-5">LOGOWANIE</h1>
      <AuthForm
        textOnButton="Zaloguj"
        :submitForm="loginUser"
        :errors="errors"
      />
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
    loginUser(userInfo) {
      if(!userInfo.email || !userInfo.password) {
        this.errors = {}
        if(!userInfo.email) {
          this.errors.email = ['E-Mail jest wymagany']
        }
        if(!userInfo.password) {
          this.errors.password = ['Hasło jest wymagane']
        }
        return
      }
      this.$auth.loginWith('local', {data: {email: userInfo.email, password: userInfo.password}}).then(res => {
        this.$router.push('/')
      }).catch(err => {
        if(err.response.data.errors) {
          this.errors = err.response.data.errors
          if(err.response.data.errors.password)
            this.errors.password = ['Hasło musi mieć co najmniej 6 znaków']
          if(err.response.data.errors.email)
            this.errors.email = ['E-mail musi być prawidłowym adresem e-mail']
        }
        else if (err.response.status === 401) {
          this.errors = {}
          this.errors.password = ['Niepoprawne hasło lub email']
          this.errors.email = ['Niepoprawne hasło lub email']
        }
      })
    }
  }
}
</script>
