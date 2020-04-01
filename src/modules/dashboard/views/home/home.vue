<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../../../../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{ $t("home.title") }}
        </h1>
        <p class="subheading font-weight-regular">
          {{ $t("home.subTitle") }}
        </p>
      </v-col>
      <v-col
        class="mb-5"
        cols="12"
      >
        <h2 class="headline font-weight-bold mb-3">
          {{ $t("home.stacks") }}
        </h2>
        <v-row justify="center">
          <a
            v-for="(next, i) in whatsNext"
            :key="i"
            :href="next.href"
            class="subheading mx-3"
            target="_blank"
          >
            {{ next.text }}
          </a>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    whatsNext: [
      {
        text: 'Vue',
        href: 'https://vuejs.org/',
      },
      {
        text: 'Vuetify',
        href: 'https://vuetifyjs.com/',
      },
      {
        text: 'i18n',
        href: 'https://kazupon.github.io/vue-i18n/',
      },
    ],
  }),
};
</script>
