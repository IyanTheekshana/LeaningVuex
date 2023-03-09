<template>
  <!-- <button @click="addOne()">Add 1</button> -->
  <button @click="increment">Add 1</button>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch("increment");
    // },
    ...mapActions(["increment"]),
  },
};
</script>
