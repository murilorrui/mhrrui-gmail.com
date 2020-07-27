<template lang="html">
  <v-text-field
    label="CNPJ"
    v-mask="{ mask:'##.###.###/####-##', unmaskedVar: value }"
    :rules="[rules.required]"
    v-model="cnpj"
    required
  ></v-text-field>
</template>

<script>
import { mask } from '@titou10/v-mask';

export default {
  directives: { mask },
  props: {
    value: {
      type: String,
      default: '',
    },
    rules: Object,
  },
  computed: {
    cnpj: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('set-cnpj', value);
      },
    },
  },
};
</script>
