<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on }">
        <v-avatar
          v-on="on"
          src="https://randomuser.me/api/portraits/women/81.jpg"
          >
          <v-img src="https://randomuser.me/api/portraits/women/81.jpg"/>
        </v-avatar>
      </template>
      <v-list>
        <v-list-item @click="logout">
          <v-list-item-title>{{$t('global.logout')}}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push('login');
    },
  },
};
</script>
