import {useStore} from "vuex";

export const useCategories = () => {
  const store = useStore();
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
    resetCurrentCategory
  };
};