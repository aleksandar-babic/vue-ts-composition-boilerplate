<template>
  <div class="hello">
    <h1>Super complex counter</h1>
    <p>Current counter value: {{ counter }}</p>
    <button class="bumpBtn" @click="bumpCounter">Bump counter!</button>
    <p>Counter state is local (tightly coupled to this component)</p>
  </div>
</template>

<script lang="ts">
import useCounter from "@/store/counter/counter.store";

export default {
  setup() {
    return {
      ...useCounter()
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1 {
  margin: 40px 0 0;
}
</style>
