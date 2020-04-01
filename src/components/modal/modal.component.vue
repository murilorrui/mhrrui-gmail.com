<template>
  <v-dialog v-model="modal" :width="width" class="modal">
    <v-card>
      <v-card-title class="headline" primary-title="primary-title">
        <slot name="header"></slot>
        <v-spacer></v-spacer>
        <v-btn class="modal__close" icon="icon" @click="close">
          <v-icon color="grey darken-1">mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-text>
        <slot></slot>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <slot name="actions"></slot>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 500,
    },
  },
  computed: {
    modal: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('toggle-modal', value);
      },
    },
  },
  methods: {
    close() {
      this.$emit('toggle-modal', false);
    },
  },
};
</script>

<style lang="sass">
  .v-dialog
    overflow: hidden
</style>
