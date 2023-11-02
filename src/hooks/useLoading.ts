import {useStore} from "vuex";
import {computed} from "vue";

export const useLoading = () => {
  const store = useStore();
  const isLoading = computed(() => store.state.loading)
  const setLoading = (loading) => {
    store.commit("setLoading", loading);
  }
  return {
    isLoading,
    setLoading
  };
};