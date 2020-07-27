<template lang="html">
  <div class="upload-avatar">
    <v-avatar :size="size" class="upload-avatar__image">
      <v-img :src="image"></v-img>
    </v-avatar>
    <v-file-input
      :label="$t('global.uploadAvatar')"
      filled
      @change="uploadImage"
      prepend-icon="mdi-camera"
      type="file"
      />
  </div>
</template>

<script>
export default {
  props: {
    avatar: String,
  },
  computed: {
    image() {
      return this.avatar || 'https://lh3.googleusercontent.com/proxy/ROiint8kSECJlupzCfGB-RUBW4FaOqHWaNti-ym1QQ5qtZivGbuSMiMMyy3hA_S1lx7jYWkipndIAGMuBdFmLdZ522abnR3s2_rEnd7UxzWJbQubSjmqDvw1dw';
    },
    size() {
      return this.$vuetify.breakpoint.smAndDown ? 100 : 300;
    },
  },
  methods: {
    uploadImage() {
      const file = document
        .querySelector('input[type=file]')
        .files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.$emit('set-avatar', e.target.result);
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>

<style lang="sass">
  .upload-avatar
    display: flex
    flex-direction: column
    align-items: center
    &__image
      margin-bottom: 40px
    .v-file-input
      width: 100%
</style>
