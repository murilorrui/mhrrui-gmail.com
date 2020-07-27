<template lang="html">
  <v-text-field
    label="CPF"
    v-mask="{ mask:'###.###.###-##', unmaskedVar: value }"
    :rules="[rules.required]"
    v-model="cpf"
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
    cpf: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('set-cpf', value);
      },
    },
  },
};
</script>
