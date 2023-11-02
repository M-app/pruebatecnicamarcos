export const useProducts = () => {
  const loadAllProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    return await response.json();
  }
  const getProductsByCategory = async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    return await response.json();
  }
  return {
    loadAllProducts,
    getProductsByCategory
  };
};