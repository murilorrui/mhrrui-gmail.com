<template lang="html">
  <v-row class="base-crud" v-if="form">
    <v-col lg="4" cols="12">
      <v-text-field
        label="E-mail"
        v-model="form.email"
      ></v-text-field>
    </v-col>
    <v-col lg="4" cols="12">
      <v-text-field
        v-mask="{ mask:'(##) ####-####', unmaskedVar: form.telephone }"
        :label="$t('global.telephone')"
        v-model="form.telephone"
      ></v-text-field>
    </v-col>
    <v-col lg="4" cols="12">
      <v-text-field
        v-mask="{ mask:'(##) #####-####', unmaskedVar: form.phone }"
        :label="$t('global.phone')"
        v-model="form.phone"
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
import { mask } from '@titou10/v-mask';

export default {
  directives: { mask },
  props: {
    form: Object,
  },
};
</script>
