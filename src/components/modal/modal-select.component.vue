<template>
  <modal-default
    v-model="modalSelect"
    @toggle-modal="toggleModal"
    :width="400"
  >
    <p class="text-center">{{$t('global.modal.select')}}</p>
    <v-row class="px-5 py-3" slot="actions">
      <v-btn
        dark="dark"
        elevation="0"
        @click="firstOption"
        color="primary"
      >
        {{$t(modalSelectData.firstOption)}}
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        dark="dark"
        elevation="0"
        @click="secondOption"
        color="primary"
      >
        {{$t(modalSelectData.secondOption)}}
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
    modalSelectData: {
      type: Object,
      default: () => ({
        firstOption: '',
        secondOption: '',
      }),
    },
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
    firstOption() {
      this.$emit('first-option');
    },
    secondOption() {
      this.$emit('second-option');
    },
  },
};
</script>
