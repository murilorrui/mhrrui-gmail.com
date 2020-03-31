<template>
  <v-app>
    <transition name="slide-y-transition" mode="out-in">
      <router-view/>
    </transition>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
  }),
  computed: {
    logged() {
      return !!localStorage.getItem('user');
    },
  },
  created() {
    if (!this.logged) {
      this.$router.push('/login');
    }
  },
};
</script>
