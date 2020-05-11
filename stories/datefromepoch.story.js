import VueCompositionApi from "@vue/composition-api";
import Vue from "vue";
Vue.use(VueCompositionApi);

import DateFromEpoch from "../src/components/DateFromEpoch";

export default { title: "DateFromEpoch" };

export const asAComponent = () => ({
  components: { DateFromEpoch },
  template: "<DateFromEpoch />"
});
