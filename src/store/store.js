import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0,
    collapseMenu: false,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});
export default store;
