import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

export default {
  namespace: true,
  state() {
    return {
      counter: 0,
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters,
};
