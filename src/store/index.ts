import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      categoriaActual: null,
      loading: false,
      searchText: "",
      cart: []
    }
  },
  mutations: {
    setCategoriaActual (state, categoria) {
      state.categoriaActual = categoria
    },
    setLoading (state, loading) {
      state.loading = loading
    },
    setSearchText (state, text) {
      state.searchText = text
    },
    addProductoToCart (state, producto) {
      state.cart.push(producto);
    },
    updateProductoFromCart (state, producto) {
      const index = state.cart.findIndex(el => el.id === producto.id)
      if (index > -1) {
        state.cart.splice(index, 1, producto)
      }
    },
    deleteProductoFromCart (state, producto) {
      const index = state.cart.findIndex(el => el.id === producto.id)
      if (index > -1) {
        state.cart.splice(index, 1)
      }
    },
    cleanCart (state) {
      state.cart.splice(0, state.cart.length)
    }
  }
})

export default store