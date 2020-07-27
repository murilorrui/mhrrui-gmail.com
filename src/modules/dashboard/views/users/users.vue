<template>
  <div>
    <v-container class="users">
      <v-row class="ma-3">
        <v-spacer/>
        <v-btn color="primary" @click="newUser()">
          {{$t('users.new')}}
        </v-btn>
      </v-row>
      <v-card>
        <v-card-title>
          {{$t('users.title')}}
          <v-spacer></v-spacer>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            :label="$t('global.search')"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :headers="headers"
          :items="users"
          :search="search"
          :loading-text="$t('global.table.loading')"
          :loading="loading"
        >
          <template v-slot:item.type="{ item }">
            <td class="text-xs-right">{{ $t(`users.type.${item.type}`) }}</td>
          </template>
          <template v-slot:item.actions="{ item }">
            <v-icon
              small
              class="mr-2"
              @click="editItem(item)"
            >
              mdi-pencil
            </v-icon>
            <v-icon
              small
              @click="showModalDeleteUser(item)"
            >
              mdi-delete
            </v-icon>
        </template>
        <template slot="pageText" scope="{ pageStart, pageStop }">
          From {{ pageStart }} to {{ pageStop }}
        </template>
        </v-data-table>
      </v-card>
    </v-container>
    <modal-delete
      v-model="modalDeleteUser"
      @toggle-modal="toggleModal"
      @delete-confirm="deleteCofirm"
      />
    <modal-select
      v-model="modalSelectType"
      @toggle-modal="toggleModalSelect"
      :modal-select-data="modalSelectData"
      @first-option="newLegalPerson"
      @second-option="newNaturalPerson"
      />
  </div>
</template>

<script>
import UsersService from '@/services/user';
import ModalDelete from '@/components/modal/modal-delete.component.vue';
import ModalSelect from '@/components/modal/modal-select.component.vue';

export default {
  components: {
    ModalDelete,
    ModalSelect,
  },
  computed: {
    headers() {
      return [
        { text: this.$t('global.name'), align: 'start', value: 'name' },
        { text: this.$t('global.type'), value: 'type', sortable: true },
        {
          text: this.$t('global.table.actions'),
          value: 'actions',
          width: '20%',
          align: 'end',
          sortable: false,
        },
      ];
    },
  },
  data: () => ({
    search: '',
    loading: false,
    usersService: new UsersService(),
    users: [],
    modalDeleteUser: false,
    modalSelectType: false,
    userDelete: '',
    modalSelectData: {
      firstOption: 'users.type.legal',
      secondOption: 'users.type.natural',
    },
  }),
  methods: {
    getUsers() {
      this.loading = true;
      this.usersService.getUsers().then((resp) => {
        this.loading = false;
        this.users = resp;
      });
    },
    newUser() {
      this.modalSelectType = true;
    },
    newNaturalPerson() {
      this.$router.push('/new-natural-person');
    },
    newLegalPerson() {
      this.$router.push('/new-legal-person');
    },
    editItem(item) {
      this.$router.push(`/edit-${item.type}-person/${item._id}`);
    },
    showModalDeleteUser(item) {
      this.modalDeleteUser = true;
      this.userDelete = item._id;
    },
    deleteCofirm() {
      this.modalDeleteUser = false;
      this.usersService.deleteUser(this.userDelete).then(() => {
        this.getUsers();
      });
    },
    toggleModal(value) {
      this.modalDeleteUser = value;
    },
    toggleModalSelect(value) {
      this.modalSelectType = value;
    },
  },
  created() {
    this.getUsers();
  },
};
</script>
