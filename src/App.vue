<template>
  <base-container title="Vuex">
    <h3>{{ $store.state.counter }}</h3>
    <button>Add 1</button>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";

export default {
  components: {
    BaseContainer,
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
}
button:hover {
  background-color: lightskyblue;
  color: blue;
}
</style>
