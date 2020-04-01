import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueI18n from 'vue-i18n';

Vue.use(Vuetify);

const messages = {
  en: {
    global: {
      table: {
        actions: 'Actions',
        rowsPerPage: 'Rows per Page',
      },
      sidebar: {
        home: 'Home',
        employees: 'Employees',
        loading: 'Loading... Please wait',
      },
      name: 'Name',
      city: 'City',
      job: 'Job',
      country: 'Country',
      zipCode: 'Zip code',
      confirm: 'Confirm',
      search: 'Search',
      $vuetify: {
        dataIterator: {
          rowsPerPageText: 'Items per page:',
        },
      },
    },
    home: {
      title: 'Welcome to VueCrud 2020',
      subTitle: 'Create by Murilo Rui',
      stacks: 'Stacks',
    },
    employees: {
      title: 'Employees',
      new: 'New Employee',
    },
  },
  pt: {
    global: {
      sidebar: {
        home: 'Início',
        employees: 'Funcionários',
      },
      table: {
        actions: 'Ações',
        rowsPerPage: 'Linhas por página',
        loading: 'Carregando... Espere por favor',
      },
      name: 'Nome',
      city: 'Cidade',
      job: 'Função de trabalho',
      country: 'País',
      zipCode: 'CEP',
      confirm: 'Concluir',
      search: 'Pesquisar',
    },
    home: {
      title: 'Bem vindo ao VueCrud 2020',
      subTitle: 'Criado por Murilo Rui',
      stacks: 'Tecnologias',
    },
    employees: {
      title: 'Funcionários',
      new: 'Novo Funcionário',
    },
  },
};

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'pt', // set locale
  messages, // set locale messages
});
