import {useStore} from "vuex";
import {computed} from "vue";
export const useCategories = () => {
  const store = useStore();
  const currentCategoria = computed(() => store.state.categoriaActual)
  const loadAllCategories = async () => {
    const response = await fetch('https://fakestoreapi.com/products/categories')
    return await response.json();
  }
  const setCurrentCategory = (category) => {
    store.commit("setCategoriaActual", category);
  }
  const resetCurrentCategory = () => {
    console.log("reset")
    setCurrentCategory(null)
  }
  return {
    loadAllCategories,
    setCurrentCategory,
    resetCurrentCategory,
    currentCategoria
  };
};