<template lang="html">
  <v-navigation-drawer
    absolute
    permanent
    app
  >
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-avatar>
          <v-img src="https://randomuser.me/api/portraits/women/81.jpg"/>
        </v-avatar>
        <v-list-item-content>
          <v-list-item-title class="ml-3">{{userName}}</v-list-item-title>
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
        @click="navigate(item)"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    userName() {
      return localStorage.getItem('user');
    },
  },
  data: () => ({
    items: [
      { title: 'Home', icon: 'mdi-home-city', path: '/' },
      { title: 'Users', icon: 'mdi-account-group-outline', path: '/users' },
    ],
  }),
  methods: {
    navigate(item) {
      this.$router.push(item.path);
    },
  },
};
</script>
