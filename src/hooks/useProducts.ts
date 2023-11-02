export const useProducts = () => {
  const loadAllProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    return await response.json();
  }
  const getProductsByCategory = async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    return await response.json();
  }
  const searchProduct = async (text) => {
    //const response = await fetch(`https://fakestoreapi.com/products/search?q=${text}`)
    console.log('search')
    const response = await fetch('https://fakestoreapi.com/products/search?q=cotton')
    console.log('response; ', response.json())
    return await response.json();
  }
  return {
    loadAllProducts,
    getProductsByCategory,
    searchProduct
  };
};