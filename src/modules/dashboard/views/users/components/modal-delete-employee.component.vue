<template>
  <modal-default
    v-model="modalDeleteEmployee"
    @toggle-modal="toggleModal"
    :width="250"
  >
    <p class="text-center">{{$t('global.modal.delete')}}</p>
    <v-row class="px-5 py-3" slot="actions">
      <v-btn elevation="0" @click="toggleModal(false)">não</v-btn>
      <v-spacer></v-spacer>
      <v-btn dark="dark" elevation="0" @click="deleteCofirm" color="primary">sim</v-btn>
    </v-row>
  </modal-default>
</template>

<script>
import ModalDefault from '@/components/modal/modal.component.vue';

export default {
  components: {
    ModalDefault,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    modalDeleteEmployee() {
      return this.value;
    },
  },
  methods: {
    toggleModal(value) {
      this.$emit('toggle-modal', value);
    },
    deleteCofirm() {
      this.$emit('delete-confirm');
    },
  },
};
</script>
