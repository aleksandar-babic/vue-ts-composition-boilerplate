<template>
  <div class="counter">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Counter />
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from "@/components/counter/Counter.vue";

export default {
  name: "CounterView",
  components: {
    Counter
  }
};
</script>
