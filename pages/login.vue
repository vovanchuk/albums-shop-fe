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
      console.log(userInfo)
      this.$auth.loginWith('local', {data: {email: userInfo.email, password: userInfo.password}}).then(res => {
        console.log('success', res)
        this.$router.push('/')
      }).catch(err => {
        if(err.response.data.errors) {
          this.errors = err.response.data.errors
        }
        else if (err.response.status === 401) {
          console.log('asd')
          this.errors = {}
          this.errors.password = ['Incorrect password']
        }
      })
    }
  }
}
</script>
