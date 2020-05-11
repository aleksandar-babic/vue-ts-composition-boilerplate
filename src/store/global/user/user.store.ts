import Vue from "vue";
import { reactive, computed, Ref } from "@vue/composition-api";
import VueCompositionApi from "@vue/composition-api";
Vue.use(VueCompositionApi);

import { authApiService } from "@/services/api/auth/auth.api-service";
import { User } from "@/models/user.model";
import { getRandomElement } from "@/utils/array.util";

const state = reactive({
  user: {}
});

export default function useUser(): {
  fetchAndSetRandomUser: () => void;
  user: Ref<User>;
} {
  const user: Ref<User> = computed(() => state.user as User);

  function setUser(user: User): void {
    state.user = user;
  }

  async function fetchAndSetRandomUser() {
    const res = await authApiService.getUsers();

    setUser(getRandomElement(res.data));
  }

  return {
    fetchAndSetRandomUser,
    user
  };
}
