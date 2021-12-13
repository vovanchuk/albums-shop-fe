<template>
  <b-form>
    <b-form-group v-if="hasName">
      <b-form-input type="text" placeholder="Nazwa użytkownika" v-model="userInfo.name"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input
        type="email"
        placeholder="Email"
        v-model="userInfo.email"
        aria-describedby="input-email-feedback"
        :state="emailErrorStatus"
      ></b-form-input>
      <b-form-invalid-feedback
        v-for="item in errors.email"
        id="input-email-feedback"
      >
        {{item}}
      </b-form-invalid-feedback>
    </b-form-group>
    <b-form-group>
      <b-form-input
        type="password"
        placeholder="Hasło"
        aria-describedby="input-password-feedback"
        v-model="userInfo.password"
        :state="passwordErrorStatus"
      ></b-form-input>
      <b-form-invalid-feedback
        v-for="item in errors.password"
        id="input-password-feedback"
      >
        {{item}}
      </b-form-invalid-feedback>
    </b-form-group>
    <b-button @click="submitForm(userInfo)" block variant="outline-primary">{{ textOnButton }}</b-button>
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
    },
    errors: {
      type: Object,
    }
  },
  computed: {
    emailError() {
      return this.errors.email
    },
    emailErrorStatus() {
      let err = this.errors.email
      if(err && err.length > 0) return false
      else if (this.errors.email !== undefined) return null
      else if (this.userInfo.email) return true
    },
    passwordError() {
      return this.errors.password
    },
    passwordErrorStatus() {
      let err = this.errors.password
      if(err && err.length > 0) return false
      else if (this.errors.password !== undefined) return null
      else if (this.userInfo.password) return true
    }
  }
}
</script>
