<template lang="html">
  <v-app>
    <v-content class="login">
      <v-card class="login__card">
        <v-container class="pa-12" grid-list-lg fluid>
          <v-form ref="form" @submit.prevent="submit">
            <v-layout row wrap justify="center" align-items="center">
                <v-col cols="12">
                  <v-text-field
                    label="Login"
                    :rules="[rules.required]"
                    v-model="form.login"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.password"
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                    :rules="[rules.required, rules.min]"
                    :type="showPassword ? 'text' : 'password'"
                    label="Normal with hint text"
                    hint="At least 8 characters"
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-btn type="submit" block>
                    Login
                  </v-btn>
                </v-col>
            </v-layout>
          </v-form>
        </v-container>
      </v-card>
    </v-content>
  </v-app>
</template>

<script>
export default {
  computed: {
    logged() {
      return !!localStorage.getItem('user');
    },
  },
  data: () => ({
    form: {
      login: '',
      password: '',
    },
    rules: {
      required: (v) => !!v || 'Required.',
      min: (v) => v.length >= 8 || 'Min 8 characters',
    },
    conditions: false,
    showPassword: false,
  }),
  methods: {
    submit() {
      localStorage.setItem('user', this.form.login);
      this.$router.push('/');
    },
  },
  created() {
    if (this.logged) {
      this.$router.push('/');
    }
  },
};
</script>

<style lang="sass">
  .login
    &__card
      border: 0
      width: 45%
      display: block
      margin: 0
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
</style>
