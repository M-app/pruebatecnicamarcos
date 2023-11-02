import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      categoriaActual: null,
      loading: false
    }
  },
  mutations: {
    setCategoriaActual (state, categoria) {
      state.categoriaActual = categoria
    },
    setLoading (state, loading) {
      state.loading = loading
    }
  }
})

export default store