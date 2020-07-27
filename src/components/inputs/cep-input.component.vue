<template lang="html">
  <v-text-field
    :label="$t('address.zipCode')"
    v-mask="{ mask:'#####-###', unmaskedVar: value }"
    v-model="cep"
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
    index: Number,
  },
  computed: {
    cep: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('set-cep', value, this.index);
      },
    },
  },
};
</script>
