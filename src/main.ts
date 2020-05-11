import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import i18n from "./i18n";
import router from "./router";

import VueCompositionApi from "@vue/composition-api";
Vue.use(VueCompositionApi);

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
