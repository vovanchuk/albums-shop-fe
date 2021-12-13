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
      console.log(userInfo)
      if(!userInfo.email) {
        this.errors.email = ['E-Mail is required']
      }
      if(!userInfo.password) {
        this.errors.password = ['Password is required']
      }
      if(!userInfo.name) {
        this.errors.name = ['Name is required']
      }
      if(!userInfo.email || !userInfo.password || !userInfo.name) {
        return
      }
      this.$axios.post('/api/auth/register/', {
        email: userInfo.email,
        name: userInfo.name,
        password: userInfo.password,
        password_confirmation: userInfo.password
      }).then(response => {
        this.$router.push('/')
      })
    }
  }
}
</script>
