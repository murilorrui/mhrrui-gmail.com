<template lang="html">
  <div>
    <v-row class="mb-5 ml-1">
      <v-btn
        @click="addNewAddress"
        outlined
        >
        <v-icon>mdi-plus</v-icon>
        {{ $t('address.addNewAddress') }}
      </v-btn>
    </v-row>
    <v-expansion-panels flat>
      <v-expansion-panel
        v-for="(address, index) in adresses"
        :key="index"
        >
        <v-expansion-panel-header>{{ $t('global.address') }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <v-col lg="6" cols="12">
              <v-text-field
                :label="$t('address.street')"
                :rules="[rules.required]"
                v-model="address.street"
                required
              ></v-text-field>
            </v-col>
            <v-col lg="6" cols="12">
              <v-text-field
                :label="$t('address.number')"
                :rules="[rules.required, rules.numberLength]"
                v-model="address.number"
                required
              ></v-text-field>
            </v-col>
            <v-col lg="6" cols="12">
              <v-text-field
                :label="$t('address.additionalDetails')"
                v-model="address.additionalDetails"
              ></v-text-field>
            </v-col>
            <v-col lg="6" cols="12">
              <v-text-field
                :label="$t('address.neighborhood')"
                v-model="address.neighborhood"
              ></v-text-field>
            </v-col>
            <v-col lg="6" cols="12">
              <v-text-field
                :label="$t('address.city')"
                :rules="[rules.required]"
                v-model="address.city"
                required
              ></v-text-field>
            </v-col>
            <v-col lg="6" cols="12">
              <v-text-field
                :label="$t('address.state')"
                :rules="[rules.required]"
                v-model="address.state"
                required
              ></v-text-field>
            </v-col>
            <v-col lg="6" cols="12">
              <cep-input
                v-model="address.zipCode"
                :rules="rules"
                :index="index"
                @set-cep="setCep"
                />
            </v-col>
            <v-col lg="6" cols="12" class="address-form__delete">
              <v-btn
                @click="deleteAddress(index)"
                color="red darken-2"
                dark
                >
                <v-icon>mdi-delete</v-icon>
                {{ $t('global.delete') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import CepInput from '@/components/inputs/cep-input.component.vue';

export default {
  components: {
    CepInput,
  },
  props: {
    adresses: Array,
    rules: Object,
  },
  methods: {
    addNewAddress() {
      this.$emit('add-new-address');
    },
    deleteAddress(index) {
      this.$emit('delete-address', index);
    },
    setCep(value, index) {
      this.adresses[index].zipCode = value;
    },
  },
};
</script>

<style lang="sass">
  .address-form
    &__delete
      display: flex
      justify-content: flex-end
</style>
