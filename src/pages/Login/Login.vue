<template>
  <q-page padding>
    <div class="q-pa-md login-div flex-center">
      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md login-form"
        ref="loginForm"
        autocomplete="off"
        spellcheck="false"
      >
        <q-input
          filled
          v-model="form.username"
          :label="$t('login.username.label')"
          :hint="$t('login.username.hint')"
          lazy-rules
          :rules="[val => val && !val.includes(' ') && val.length >= 5 && val.length <= 16 || $t('login.username.validate')]"
        />

        <q-input
          filled
          type="password"
          v-model="form.password"
          :label="$t('login.password.label')"
          :hint="$t('login.password.hint')"
          lazy-rules
          :rules="[val => val && !val.includes(' ') && val.length >= 8 && val.length <= 16 || $t('login.password.validate')]"
        />

        <q-toggle v-model="saveInfo" :label="$t('login.save_info')" />

        <div>
          <q-btn :label="$t('submit')" type="submit" color="primary"/>
          <q-btn :label="$t('reset')" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageLogin',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      saveInfo: false
    }
  },
  created () {
    // redirect to home page if logged in
    if (this.$auth.user.token) {
      this.$router.push('/')
    }
  },
  methods: {
    onSubmit () {
      this.$refs.loginForm.validate().then(success => {
        if (success) {
          // call API here
          console.log('login success')
          this.form.token = 'abc123xzy456ThisIsAccessTokenFromServer'
          this.$auth.login(this.form, () => {
            this.$router.push(this.$route.query.previous || '/')
          })
        } else {
          // this.$refs.loginForm.resetValidation()
          // oh no, user has filled in
          // at least an invalid value
        }
      })
    },

    onReset () {
      this.form = {
        username: '',
        password: ''
      }
      this.saveInfo = false
    }
  }
}
</script>

<style scoped lang="stylus">
.login-div
  display flex
  align-items center
  justify-content center
  height 80vh
  .login-form
    min-width 320px
    max-width 400px
</style>
