<template>
  <v-container class="employees">
    <v-layout class="ma-3" row>
      <v-spacer/>
      <v-btn large @click="newUser()">
        New Employee
      </v-btn>
    </v-layout>
    <v-card>
      <v-card-title>
        Employees
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="employees"
        :search="search"
        loading-text="Loading... Please wait"
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
      </v-data-table>
    </v-card>
  </v-container>
</template>

<script>
import EmployeesService from '@/services/employees';

export default {
  data: () => ({
    search: '',
    loading: false,
    employeesService: new EmployeesService(),
    headers: [
      {
        text: 'Name',
        align: 'start',
        value: 'name',
      },
      { text: 'City', value: 'city', sortable: false },
      { text: 'Job', value: 'job', sortable: false },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
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
