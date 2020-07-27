<template lang="html">
  <v-navigation-drawer
    :permanent="$vuetify.breakpoint.mdAndUp"
    :temporary="$vuetify.breakpoint.smAndDown"
    v-model="drawerTeste"
    app
  >
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-img
          :height="35"
          :max-width="35"
          :src="require('../../../assets/logo.png')"
        />
        <v-list-item-content>
          <v-list-item-title class="ml-3">VueCrud 2020</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
    <v-divider></v-divider>
    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.path"
        exact
        color="secondary"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ $t(`${item.title}`) }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    drawerTeste: {
      get() {
        return this.drawer;
      },
      set(value) {
        this.$emit('handler-drawer', value);
      },
    },
    userName() {
      return localStorage.getItem('user');
    },
  },
  data: () => ({
    items: [
      { title: 'global.sidebar.home', icon: 'mdi-home-city', path: '/' },
      { title: 'global.sidebar.users', icon: 'mdi-account-group-outline', path: '/users' },
    ],
  }),
  methods: {
    navigate(item) {
      this.$router.push(item.path);
    },
  },
};
</script>
