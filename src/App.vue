<template>
  <v-app>
    
    
      <v-app-bar color="primary" prominent >
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Examen practico 2</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon="mdi-home" to="/"></v-btn>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" permanent>
        <v-list>
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <router-link to="/">Inicio</router-link>
            </v-list-item-content>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-box</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <router-link to="/productos">Productos</router-link>
            </v-list-item-content>
          </v-list-item>
          
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-format-list-bulleted</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <router-link to="/lista-productos">Lista Productos</router-link>
            </v-list-item-content>
          </v-list-item>
          
        </v-list>
      </v-navigation-drawer>
      
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      drawer: true,
      group: null,
    }
  },
  watch: {
      group () {
        this.drawer = false
      },
    }
}
</script>
