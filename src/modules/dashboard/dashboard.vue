<template lang="html">
  <div class="dashboard">
    <side-bar
      :drawer="drawer"
      @handler-drawer="handlerDrawer"
    />
    <app-header
      @handler-drawer="handlerDrawer"
    />
    <v-main>
      <transition name="slide-y-transition" mode="out-in">
        <div class="pa-8">
          <router-view/>
        </div>
      </transition>
    </v-main>
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
  data: () => ({
    drawer: false,
  }),
  methods: {
    handlerDrawer(value) {
      this.drawer = value;
    },
  },
};
</script>
