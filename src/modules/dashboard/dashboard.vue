<template lang="html">
  <div class="dashboard">
    <app-header/>
    <side-bar/>
    <v-content>
      <transition name="slide-y-transition" mode="out-in">
        <div class="pa-8">
          <router-view/>
        </div>
      </transition>
    </v-content>
  </div>
</template>

<script>
import AppHeader from '@/components/layout/header/header.vue';
import SideBar from '@/components/layout/sidebar/sidebar.vue';

export default {
  components: {
    AppHeader,
    SideBar,
  },
};
</script>
