import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductosView from '@/views/ProductosView.vue'
import ListaProductoView from '@/views/ListaProductoView.vue'

const routes = [
  
  { path: '/', name: 'Home', component: HomeView },
  { path: '/productos', name: 'Productos', component: ProductosView },
  { path: '/lista-productos', name: 'ListaProductos', component: ListaProductoView },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
