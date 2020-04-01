import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#003a48',
        secondary: '#2fd5b7',
        anchor: '#8c9eff',
      },
    },
  },
});
