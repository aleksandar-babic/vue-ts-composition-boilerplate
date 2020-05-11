import Vue from "vue";
import { Ref, ref } from "@vue/composition-api";
import VueCompositionApi from "@vue/composition-api";
Vue.use(VueCompositionApi);

export default function useCounter(): {
  counter: Ref<number>;
  bumpCounter: () => void;
} {
  const counter: Ref<number> = ref(0);

  function bumpCounter(): void {
    counter.value++;
  }

  return {
    counter,
    bumpCounter
  };
}
