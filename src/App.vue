<template>
  <v-app>
    <transition name="slide-y-transition" mode="out-in">
      <router-view/>
    </transition>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex';

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
  methods: {
    ...mapActions([
      'setUser',
    ]),
  },
  created() {
    console.log(this);
    if (!this.logged) {
      this.$router.push('/login');
      return;
    }
    this.setUser({ name: localStorage.getItem('user') });
  },
};
</script>
