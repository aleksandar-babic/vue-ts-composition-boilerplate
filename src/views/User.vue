<template>
  <div class="user">
    <h1>This is user page</h1>
    <p>
      User is fetched randomly using
      <a href="https://jsonplaceholder.typicode.com/" target="_blank"
        >jsonplaceholder</a
      >.
    </p>
    <UserDetails />
  </div>
</template>

<script>
// @ is an alias to /src
import UserDetails from "@/components/user/UserDetails.vue";

export default {
  name: "User",
  components: {
    UserDetails
  }
};
</script>
