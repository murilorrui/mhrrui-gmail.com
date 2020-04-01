<template lang="html">
  <v-app-bar
    elevation="1"
    app
    dark
    color="primary"
  >
    <v-app-bar-nav-icon
      v-if="$vuetify.breakpoint.smAndDown"
      @click="handlerDrawer"
    />
    <v-container>
      <v-row  align="center">
        <v-spacer/>
        <v-col xs="2" sm="2" md="1">
          <v-select
            class="header__select"
            :items="items"
            v-model="language"
            @change="setLanguage"
          ></v-select>
        </v-col>
        <v-col xs="4" sm="3" lg="2" class="header__menu">
          <span class="mr-3">{{user.name}}</span>
          <v-avatar>
            <v-img src="https://randomuser.me/api/portraits/women/81.jpg"/>
          </v-avatar>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'user',
    ]),
  },
  data: () => ({
    items: ['pt', 'en'],
    language: 'pt',
  }),
  methods: {
    setLanguage(item) {
      this.language = item;
      this.$i18n.locale = item;
    },
    handlerDrawer() {
      this.$emit('handler-drawer', true);
    },
  },
};
</script>

<style lang="sass">
  .header
    &__select
      font-size: .7em
      .v-input__slot
        margin-top: 10px
    &__menu
      justify-content: flex-end
      display: flex
      align-items: center
</style>
