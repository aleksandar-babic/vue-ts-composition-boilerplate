<template>
  <div class="hello">
    <h1 class="userName" v-if="user.name">Hi {{ user.name }},</h1>
    <h1>{{ msg }}</h1>
    <DateFromEpoch />
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li v-for="plugin in Object.keys(plugins)" :key="plugin">
        <a
          :href="plugins[plugin]"
          target="_blank"
          rel="noopener"
          v-text="plugin"
        />
      </li>
    </ul>
    <h3>Additional goodies</h3>
    <ul>
      <li v-for="goodie in Object.keys(goodies)" :key="goodie">
        <a
          :href="goodies[goodie]"
          target="_blank"
          rel="noopener"
          v-text="goodie"
        />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import useUser from "@/store/global/user/user.store";
import DateFromEpoch from "@/components/DateFromEpoch.vue";

export default {
  components: {
    DateFromEpoch
  },
  props: {
    msg: String
  },
  setup() {
    const { user } = useUser();

    const plugins = {
      babel:
        "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",
      typescript:
        "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",
      pwa:
        "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa",
      router:
        "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",
      eslint:
        "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",
      i18n: "https://kazupon.github.io/vue-i18n/",
      "unit-jest":
        "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest",
      "e2e-cypress":
        "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-e2e-cypress"
    };

    const goodies = {
      axios: "https://github.com/axios/axios/",
      lodash: "https://lodash.com/",
      storybook: "https://storybook.js.org/docs/guides/guide-vue/",
      "composition-api": "https://composition-api.vuejs.org/",
      "date-fns": "https://date-fns.org/",
      "vue-grid-layout": "https://github.com/jbaysolutions/vue-grid-layout"
    };

    return {
      user,
      plugins,
      goodies
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.name-input {
  display: flex;
  position: center;
}
</style>
