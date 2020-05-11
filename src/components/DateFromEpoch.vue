<template>
  <p v-if="currentTime">You've been on this page for {{ currentTime }}.</p>
</template>
<script lang="ts">
import { onUnmounted, ref } from "@vue/composition-api";
import { formatDistanceToNow } from "date-fns";

export default {
  setup() {
    const startTime = new Date();
    const currentTime = ref("");

    const updateInterval = setInterval(() => {
      currentTime.value = formatDistanceToNow(startTime, {
        includeSeconds: true
      });
    }, 1000);

    onUnmounted(() => clearInterval(updateInterval));

    return {
      currentTime
    };
  }
};
</script>
