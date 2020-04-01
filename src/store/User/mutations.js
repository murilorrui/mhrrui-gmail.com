import * as Mutations from '../mutations';

export default {
  [Mutations.SET_USER](store, user) {
    store.user = user;
  },
};
