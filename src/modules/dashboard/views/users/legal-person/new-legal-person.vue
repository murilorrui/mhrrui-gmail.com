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
                  <v-col cols="12">
                    <v-text-field
                      :label="$t('global.companyName')"
                      :rules="[rules.required]"
                      v-model="form.name"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col lg="8" cols="12">
                    <v-text-field
                      :label="$t('global.tradeMark')"
                      :rules="[rules.required]"
                      v-model="form.tradeMark"
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col lg="4" cols="12">
                    <cnpj-input
                      :value="form.cnpj"
                      :rules="rules"
                      @set-cnpj="setCnpj"
                      />
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
import UsersService from '@/services/user';
import UploadAvatar from '@/components/upload-avatar/upload-avatar.component.vue';
import BasicForm from '@/components/basic-form/basic-form.component.vue';
import AddressForm from '@/components/address-form/address-form.component.vue';
import CnpjInput from '@/components/inputs/cnpj-input.component.vue';
import ModalAlert from '@/components/modal/modal-alert.component.vue';

export default {
  components: {
    BasicForm,
    AddressForm,
    CnpjInput,
    UploadAvatar,
    ModalAlert,
  },
  data: () => ({
    loading: false,
    usersService: new UsersService(),
    modalAlert: false,
    form: {
      name: '',
      tradeMark: '',
      type: 'legal',
      avatar: '',
      cnpj: '',
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
    rules: {
      required: (v) => !!v || 'Required.',
      numberLength: (v) => v.length <= 4 || 'rules.numberLength',
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
    setCnpj(value) {
      this.form.cnpj = value;
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
};
</script>
