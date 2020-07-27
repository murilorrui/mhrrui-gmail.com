<template lang="html">
  <v-app>
    <v-main class="login">
      <v-card class="login__card">
        <v-container class="pa-12" grid-list-lg fluid>
          <v-row align="center" justify="center">
            <v-img
              :height="35"
              :max-width="35"
              :src="require('../../assets/logo.png')"
            />
            <span class="ml-3">VueCrud 2020</span>
          </v-row>
          <v-form ref="form" lazy-validation @submit.prevent="submit">
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
                    :label="$t('global.password')"
                    @click:append="showPassword = !showPassword"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-btn color="primary" type="submit" block>
                    Login
                  </v-btn>
                </v-col>
            </v-layout>
          </v-form>
        </v-container>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

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
      required: (v) => !!v || 'Required',
      min: (v) => v.length >= 8 || 'Min 8 characters',
    },
    conditions: false,
    showPassword: false,
  }),
  methods: {
    ...mapActions([
      'setUser',
    ]),
    submit() {
      if (!this.$refs.form.validate()) return;
      this.setUser({ name: this.form.login });
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
      width: 325px
      display: block
      margin: 0
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
</style>
