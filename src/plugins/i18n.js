import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import VueI18n from 'vue-i18n';

Vue.use(Vuetify);

const messages = {
  en: {
    global: {
      yes: 'yes',
      no: 'no',
      password: 'Password',
      logout: 'Logout',
      table: {
        actions: 'Actions',
        rowsPerPage: 'Rows per Page',
        loading: 'Loading...',
      },
      sidebar: {
        home: 'Home',
        users: 'Users',
      },
      name: 'Name',
      city: 'City',
      job: 'Job',
      country: 'Country',
      zipCode: 'Zip code',
      confirm: 'Confirm',
      search: 'Search',
      modal: {
        delete: 'Do you want delete this?',
        select: 'Select user type',
        alert: 'An error has occurred',
      },
      gender: 'Gender',
      telephone: 'Telephone',
      phone: 'Cellphone',
      address: 'Address',
      delete: 'Delete',
      male: 'Male',
      female: 'Female',
      other: 'Other',
      uploadAvatar: 'Add a photo',
      date: 'Date',
      type: 'Type',
      companyName: 'Company Name',
      tradeMark: 'Trade Mark',
    },
    home: {
      title: 'Welcome to VueCrud 2020',
      subTitle: 'Create by Murilo Rui',
      stacks: 'Stacks',
    },
    users: {
      title: 'Users',
      new: 'New User',
      type: {
        legal: 'Legal Person',
        natural: 'Natural Person',
      },
    },
    address: {
      addNewAddress: 'Add Address',
      street: 'Street',
      number: 'Number',
      additionalDetails: 'Additional Details',
      neighborhood: 'Neighborhood',
      city: 'City',
      state: 'State',
      zipCode: 'Zip Code',
    },
  },
  pt: {
    global: {
      yes: 'sim',
      no: 'não',
      password: 'Senha',
      logout: 'Sair',
      sidebar: {
        home: 'Início',
        users: 'Usuários',
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
      modal: {
        delete: 'Deseja realmente deletar esse registro?',
        select: 'Selecione o tipo do usúario',
        alert: 'Aconteceu um erro',
      },
      gender: 'Sexo',
      telephone: 'Telefone',
      phone: 'Celular',
      address: 'Endereço',
      delete: 'Deletar',
      male: 'Masculino',
      female: 'Feminino',
      other: 'Outro',
      uploadAvatar: 'Adicione uma foto',
      date: 'Data',
      type: 'Tipo',
      companyName: 'Razão Social',
      tradeMark: 'Nome Fantasia',
    },
    home: {
      title: 'Bem vindo ao VueCrud 2020',
      subTitle: 'Criado por Murilo Rui',
      stacks: 'Tecnologias',
    },
    users: {
      title: 'Usuários',
      new: 'Novo Usuário',
      type: {
        legal: 'Pessoa Juridica',
        natural: 'Pessoa Fisica',
      },
    },
    address: {
      addNewAddress: 'Adicionar Endereço',
      street: 'Rua',
      number: 'Número',
      additionalDetails: 'Complemento',
      neighborhood: 'Bairro',
      city: 'Cidade',
      state: 'Estado',
      zipCode: 'CEP',
    },
  },
};

Vue.use(VueI18n);

export default new VueI18n({
  locale: 'pt', // set locale
  messages, // set locale messages
});
