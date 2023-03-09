<template>
  <base-container title="Vuex">
    <!-- <h3>{{ $store.state.counter }}</h3> -->
    <the-counter></the-counter>
    <button @click="addOne()">Add 20</button>
    <change-count></change-count>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import ChangeCount from "./components/ChangeCounter.vue";
export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCount,
  },
  methods: {
    addOne() {
      // this.$store.commit("increase", { value: 20 });
      this.$store.commit({
        type: "increase",
        value: 20,
      });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font-size: 1rem;
  background-color: blue;
  color: white;
  border: none;
  padding: 0.9rem 3rem;
  transition: all 0.3s;
  border-radius: 5px;
  cursor: pointer;
  margin: 0.5rem;
}
button:hover {
  background-color: lightskyblue;
  color: blue;
}
</style>
