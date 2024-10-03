import { createStore } from 'vuex'

export default createStore({
  state: {
    nombreCompleto: 'Salvador Alexander Henriquez Marroquin',
    fechaNacimiento: '2000-11-26',
    pasatiempos: ['Leer', 'Jugar Videojuegos', 'Programación'],
    peliculasFavoritas: ['El Castillo Ambulante', 'El Senor de los Anillos', 'Furia de Titanes'],
    lenguajesProgramacionFavoritos: ['JavaScript', 'Ruby', 'C#'],
    productos: [],
  },
  getters: {
    getNombreCompleto: (state) => state.nombreCompleto,
    getFechaNacimiento: (state) => state.fechaNacimiento,
    getPasatiempos: (state) => state.pasatiempos,
    getPeliculasFavoritas: (state) => state.peliculasFavoritas,
    getLenguajesProgramacionFavoritos: (state) => state.lenguajesProgramacionFavoritos,

    getProductos: (state) => state.productos,
    
  },
  mutations: {
    ADD_PRODUCTO(state, producto) {
      state.productos.push(producto);
    },
    REMOVE_PRODUCTO(state, productoIndex) {
      state.productos.splice(productoIndex, 1);  // Remover producto por índice
    },
  },
  actions: {
    agregarProducto({ commit }, producto) {
      commit('ADD_PRODUCTO', producto);
    }, 
    removerProducto({ commit }, { id }) {
      commit('REMOVE_PRODUCTO', id);  // Acción para eliminar el producto
    }
  },
  modules: {
  }
})
