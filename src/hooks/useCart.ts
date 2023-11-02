import {useStore} from "vuex";
import {computed} from "vue";
export const useCart = () => {
  const store = useStore();
  const cartProductos = computed(() => store.state.cart)
  const addProductoCart = (producto) => {
    const prod = cartProductos.value.find(el => el.id === producto.id)
    if (prod) {
      prod.qty++
      store.commit("updateProductoFromCart", prod)
    } else {
      store.commit("addProductoToCart", producto)
    }
  }
  const updateProductoCart = (producto) => {
    store.commit("updateProductoFromCart", producto)
  }
  const deleteProductoCart = (producto) => {
    store.commit("deleteProductoFromCart", producto)
  }
  const cleanCart = () => {
    store.commit("cleanCart")
  }
  return {
    cartProductos,
    addProductoCart,
    updateProductoCart,
    deleteProductoCart,
    cleanCart
  };
};