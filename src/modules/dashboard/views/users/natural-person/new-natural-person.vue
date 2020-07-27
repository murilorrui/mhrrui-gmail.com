<template lang="html">
  <div class="new-natural-person">
    <v-container >
      <v-row class="ma-3" row>
        {{$t('users.new')}}
      </v-row>
      <v-card class="pa-3">
        <v-form ref="form" lazy-validation @submit.prevent="submit">
          <v-container grid-list-lg>
            <v-row align-items="center">
              <v-col lg="4" sm="12">
                <UploadAvatar @set-avatar="setAvatar" :avatar="form.avatar"/>
              </v-col>
              <v-col lg="8" sm="12">
                <v-row align-items="center">
                  <v-col lg="12">
                    <v-text-field
                      :label="$t('global.name')"
                      :rules="[rules.required]"
                      v-model="form.name"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col lg="4" cols="12">
                    <cpf-input
                      :value="form.cpf"
                      :rules="rules"
                      @set-cpf="setCpf"
                      />
                  </v-col>
                  <v-col lg="4" cols="12">
                    <v-select
                      :label="$t('global.gender')"
                      v-model="form.gender"
                      item-text="name"
                      item-value="type"
                      :items="genderTypes"
                      :rules="[rules.required]"
                      required
                    ></v-select>
                  </v-col>
                  <v-col lg="4" sm="12">
                    <v-menu
                      ref="datePicker"
                      v-model="datePicker"
                      :close-on-content-click="false"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                          v-model="dateFormatted"
                          :label="$t('global.date')"
                          persistent-hint
                          prepend-icon="mdi-calendar"
                          v-bind="attrs"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="date"
                        no-title
                        @input="datePicker = false">
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
                <basic-form :form="form"/>
                <address-form
                  :adresses="form.adresses"
                  :rules="rules"
                  class="mb-5"
                  @add-new-address="addNewAddress"
                  @delete-address="deleteAddress"
                  />
              </v-col>
            </v-row>
            <v-row justify="end">
              <v-btn
                type="submit"
                color="secondary"
                :loading="loading"
              >
                {{$t('global.confirm')}}
              </v-btn>
            </v-row>
          </v-container>
        </v-form>
      </v-card>
    </v-container>
    <modal-alert
      v-model="modalAlert"
      @toggle-modal="toggleModal"
     />
  </div>
</template>

<script>
import { cpf } from 'cpf-cnpj-validator';
import UsersService from '@/services/user';
import UploadAvatar from '@/components/upload-avatar/upload-avatar.component.vue';
import BasicForm from '@/components/basic-form/basic-form.component.vue';
import AddressForm from '@/components/address-form/address-form.component.vue';
import CpfInput from '@/components/inputs/cpf-input.component.vue';
import ModalAlert from '@/components/modal/modal-alert.component.vue';

export default {
  components: {
    BasicForm,
    AddressForm,
    CpfInput,
    UploadAvatar,
    ModalAlert,
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
    genderTypes() {
      return [
        {
          name: this.$t('global.male'),
          type: 'MALE',
        },
        {
          name: this.$t('global.female'),
          type: 'FEMALE',
        },
        {
          name: this.$t('global.other'),
          type: 'OTHER',
        },
      ];
    },
  },
  data: (vm) => ({
    loading: false,
    usersService: new UsersService(),
    modalAlert: false,
    form: {
      name: '',
      type: 'natural',
      avatar: '',
      cpf: '',
      date: '',
      gender: {
        name: '',
        type: '',
      },
      phone: '',
      telephone: '',
      email: '',
      adresses: [
        {
          street: '',
          additionalDetails: '',
          number: '',
          neighborhood: '',
          state: '',
          city: '',
          zipCode: '',
        },
      ],
    },
    date: '',
    dateFormatted: '',
    datePicker: false,
    rules: {
      required: (v) => !!v || vm.$t('rules.required'),
      numberLength: (v) => v.length <= 4 || vm.$t('rules.numberLength'),
      cpf: (v) => cpf.isValid(v) || vm.$t('rules.invalidCpf'),
    },
  }),
  methods: {
    submit() {
      if (!this.$refs.form.validate()) return;
      this.loading = true;
      if (this.form._id) {
        this.usersService.editUser(this.form)
          .then(() => this.success())
          .catch(() => {
            this.modalAlert = true;
            this.loading = false;
          });
        return;
      }
      this.usersService.newUser(this.form)
        .then(() => this.success())
        .catch(() => {
          this.modalAlert = true;
          this.loading = false;
        });
    },
    success() {
      this.$router.push('/users');
    },
    getUser(id) {
      this.usersService.getUser(id).then((resp) => {
        this.form = resp;
      });
    },
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split('-');
      return `${day}/${month}/${year}`;
    },
    addNewAddress() {
      this.form.adresses.push({
        street: '',
        additionalDetails: '',
        number: '',
        neighborhood: '',
        state: '',
        city: '',
        zipCode: '',
      });
    },
    deleteAddress(index) {
      this.form.adresses.splice(index, 1);
    },
    setCpf(value) {
      this.form.cpf = value;
    },
    setAvatar(value) {
      this.form.avatar = value;
    },
    toggleModal(value) {
      this.modalAlert = value;
    },
  },
  created() {
    const { id } = this.$route.params;
    if (id) {
      this.getUser(id);
    }
  },
  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    },
  },
};
</script>
