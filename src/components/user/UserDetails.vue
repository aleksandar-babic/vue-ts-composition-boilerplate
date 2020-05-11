<template>
  <div>
    <p v-if="user">
      User state is global, go back to the
      <router-link to="/">Home</router-link> page if you don't trust me!
    </p>
    <button class="fetchUserbtn" @click="fetchAndSetRandomUser">
      Fetch random user
    </button>
    <div v-if="user">
      <p v-for="prop in Object.keys(user)" :key="prop" :class="`${prop}-prop`">
        {{ prop }}: {{ user[prop] }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import useUser from "@/store/global/user/user.store";

export default {
  setup() {
    const { user, fetchAndSetRandomUser } = useUser();

    return {
      fetchAndSetRandomUser,
      user
    };
  }
};
</script>
