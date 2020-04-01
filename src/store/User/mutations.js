import SET_USER from '../mutations';

const mutations = {
  [SET_USER](store, user) {
    store.user = user;
  },
};

export default mutations;
