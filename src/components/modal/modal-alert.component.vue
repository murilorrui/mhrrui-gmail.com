<template>
  <modal-default
    v-model="modalSelect"
    @toggle-modal="toggleModal"
    :width="400"
  >
    <p class="text-center">{{$t('global.modal.alert')}}</p>
    <v-row class="px-5 py-3" slot="actions" justify="center">
      <v-btn
        dark="dark"
        elevation="0"
        @click="toggleModal"
        color="primary"
      >
      OK
      </v-btn>
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
    alert: String,
  },
  computed: {
    modalSelect() {
      return this.value;
    },
  },
  methods: {
    toggleModal(value) {
      this.$emit('toggle-modal', value);
    },
  },
};
</script>
