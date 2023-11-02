import {useStore} from "vuex";
import {computed} from "vue";
export const useSearch = () => {
  const store = useStore();
  const searchText = computed(() => store.state.searchText)
  const setSearch = (text) => {
    store.commit("setSearchText", text);
  }
  return {
    searchText,
    setSearch
  };
};