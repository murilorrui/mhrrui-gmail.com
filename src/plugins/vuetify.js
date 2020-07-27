import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import en from 'vuetify/es5/locale/en';
import pt from 'vuetify/es5/locale/pt';

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { pt, en },
    current: 'pt',
  },
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
