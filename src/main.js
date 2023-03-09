import { createApp } from "vue";
import { createStore } from "vuex";

import App from "./App.vue";

const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  getters: {
    finalCounter(currentState) {
      return currentState.counter;
    },
    normalizeCounter(currentState, getters) {
      //   const finalCounter = currentState.counter * 2;
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      } else if (finalCounter > 100) {
        return 100;
      } else {
        return finalCounter;
      }
    },
    userIsAuthenticated(currentState) {
      return currentState.isLoggedIn;
    },
  },
  actions: {
    increment(context) {
      setTimeout(() => {
        context.commit("increment");
      }, 2000);
    },
    increase(context, payload) {
      context.commit("increase", payload);
    },
    login(context) {
      context.commit("setAuth", { isAuth: true });
    },
    logout(context) {
      context.commit("setAuth", { isAuth: false });
    },
  },
});

const app = createApp(App);
app.use(store);
app.mount("#app");
