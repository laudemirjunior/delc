import { createStore } from "vuex";

export default createStore({
  state: {
    show: false,
    error: "",
    logged: true,
  },
  mutations: {
    timerTost(state, payload) {
      state.show = true;
      state.error = payload;
      setTimeout(() => {
        state.show = false;
      }, 3000);
    },
    changeLogged(state, payload) {
      state.logged = payload;
    },
  },
});
