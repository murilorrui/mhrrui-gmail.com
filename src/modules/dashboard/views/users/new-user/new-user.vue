<template lang="html">
  <v-container class="employees">
    <v-row class="ma-3" row>
      {{$t('employees.new')}}
    </v-row>
    <v-row>
    <v-card class="pa-3">
      <v-form ref="form" lazy-validation @submit.prevent="submit">
        <v-container grid-list-lg>
          <v-row align-items="center">
            <v-col cols="12">
              <v-text-field
                :label="$t('global.name')"
                :rules="[rules.required]"
                v-model="form.name"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                :label="$t('global.job')"
                :rules="[rules.required]"
                v-model="form.job"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                :label="$t('global.country')"
                :rules="[rules.required]"
                v-model="form.country"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                :label="$t('global.city')"
                :rules="[rules.required]"
                v-model="form.city"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field
                :label="$t('global.zipCode')"
                :rules="[rules.required]"
                v-model="form.zipCode"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-row justify="end">
            <v-btn type="submit" color="secondary">
              {{$t('global.confirm')}}
            </v-btn>
          </v-row>
        </v-container>
      </v-form>
    </v-card>
    </v-row>
  </v-container>
</template>

<script>
import EmployeesService from '@/services/employees';

export default {
  data: () => ({
    employeesService: new EmployeesService(),
    form: {
      name: '',
      job: '',
      avatar: '',
      country: '',
      city: '',
      zipCode: '',
    },
    rules: {
      required: (v) => !!v || 'Required.',
    },
  }),
  methods: {
    submit() {
      if (!this.$refs.form.validate()) return;
      if (this.form.id) {
        this.employeesService.editEmployee(this.form).then(() => this.$router.push('/users'));
        return;
      }
      this.employeesService.newEmployee(this.form).then(() => this.$router.push('/users'));
    },
    getEmployee(id) {
      this.employeesService.getEmployee(id).then((resp) => {
        this.form = resp;
      });
    },
  },
  created() {
    const { id } = this.$route.params;
    if (id) {
      this.getEmployee(id);
    }
  },
};
</script>
