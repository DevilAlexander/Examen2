<template>
    <div>
      <h1>Lista de Productos</h1>
    </div>
    <v-container>
      <v-row>
        <v-col
          v-for="(producto, index) in getProductos"  
          :key="producto.id"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card>
            <v-card-title>{{ producto.nombre }} (#{{ index + 1 }})</v-card-title>
            <v-card-subtitle>Precio: {{ producto.precio }} USD</v-card-subtitle>
            <v-card-subtitle>Stock: {{ producto.stock }}</v-card-subtitle>
            <v-card-subtitle>Categoría: {{ producto.categoria }}</v-card-subtitle>
            <v-card-subtitle>Proveedor: {{ producto.proveedor }}</v-card-subtitle>
  
            <v-card-actions>
              <v-btn icon @click="removerProducto(producto.id)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    name: 'ProductList',
    computed: {
      ...mapGetters(['getProductos']), // Usar directamente el getter de Vuex para obtener los productos
    },
    methods: {
      ...mapActions({
        eliminarProducto: 'removerProducto'  // Alias para evitar conflicto de nombres
      }),
  
      removerProducto(id) {
        this.eliminarProducto({ id });  // Llamar a la acción de Vuex para eliminar el producto
      }
    }
  };
  </script>
  