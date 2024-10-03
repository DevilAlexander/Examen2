<template>
  <div>
    <h1>Productos</h1>

    <v-container>
      <v-card class="mx-auto my-5" max-width="600">
        <v-card-title>Agregar Producto</v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="formValid" lazy-validation>
            <v-text-field
              label="Nombre del Producto"
              v-model="producto.nombre"
              :rules="[rules.required]"
              required
            ></v-text-field>
  
            <v-text-field
              label="Precio"
              v-model="producto.precio"
              :rules="[rules.required, rules.isNumber]"
              required
            ></v-text-field>
  
            <v-text-field
              label="Stock"
              v-model="producto.stock"
              :rules="[rules.required, rules.isNumber]"
              required
            ></v-text-field>
  
            <v-select
              label="Categoría"
              v-model="producto.categoria"
              :items="categorias"
              :rules="[rules.required]"
              required
            ></v-select>
  
            <v-select
              label="Proveedor"
              v-model="producto.proveedor"
              :items="proveedores"
              :rules="[rules.required]"
              required
            ></v-select>
  
            <v-btn
              :disabled="!formValid"
              color="primary"
              @click="guardarProducto"
            >
              Guardar Producto
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name:'ProductosView',
  data() {
    return {
      producto: {
        nombre: '',
        precio: '',
        stock: '',
        categoria: '',
        proveedor: '',
      },
      formValid: false,
      categorias: [],  // Cargar desde mounted
      proveedores: [],  // Cargar desde mounted
      rules: {
        required: (value) => !!value || 'Este campo es requerido.',
        isNumber: (value) => !isNaN(value) || 'Debe ser un número.',
      },
    };
  },
  mounted() {
    // Simular la carga de datos de categoría y proveedor desde una fuente externa (API, etc.)
    this.cargarCategorias();
    this.cargarProveedores();
  },
  methods: {
    ...mapActions(['agregarProducto']),
    
    // Método para cargar las categorías (simulación)
    cargarCategorias() {
      this.categorias = ['Electrónica', 'Ropa', 'Alimentos', 'Accesorios'];
    },

    // Método para cargar los proveedores (simulación)
    cargarProveedores() {
      this.proveedores = ['Proveedor A', 'Proveedor B', 'Proveedor C'];
    },

    guardarProducto() {
      if (this.$refs.form.validate()) {
        this.agregarProducto(this.producto);
        this.resetForm();
      }
    },
    resetForm() {
      this.producto = {
        nombre: '',
        precio: '',
        stock: '',
        categoria: '',
        proveedor: '',
      };
      this.$refs.form.reset();
    },
  },
};
</script>
