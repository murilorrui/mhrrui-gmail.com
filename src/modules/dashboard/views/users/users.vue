<template>
  <v-container class="employees">
    <v-row class="ma-3">
      <v-spacer/>
      <v-btn color="primary" @click="newUser()">
        {{$t('employees.new')}}
      </v-btn>
    </v-row>
    <v-card>
      <v-card-title>
        {{$t('employees.title')}}
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
        :items="employees"
        :search="search"
        :loading-text="$t('global.table.loading')"
        pagination-text="älo"
        :loading="loading"
      >
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
            @click="deleteItem(item)"
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
</template>

<script>
import EmployeesService from '@/services/employees';

export default {
  computed: {
    headers() {
      return [
        { text: this.$t('global.name'), align: 'start', value: 'name' },
        { text: this.$t('global.city'), value: 'city', sortable: false },
        { text: this.$t('global.job'), value: 'job', sortable: false },
        { text: this.$t('global.table.actions'), value: 'actions', sortable: false },
      ];
    },
  },
  data: () => ({
    search: '',
    loading: false,
    employeesService: new EmployeesService(),
    employees: [],
  }),
  methods: {
    getEmployees() {
      this.loading = true;
      this.employeesService.getEmployees().then((resp) => {
        this.loading = false;
        this.employees = resp;
      });
    },
    newUser() {
      this.$router.push('/new-user');
    },
    editItem(item) {
      this.$router.push(`/edit-user/${item.id}`);
    },
    deleteItem(item) {
      this.employeesService.deleteEmployee(item.id).then((resp) => {
        console.log(resp);
        this.getEmployees();
      });
    },
  },
  created() {
    this.getEmployees();
  },
};
</script>
