<template>
    <v-container :fluid="true">
       <h1 class="text-green-darken-4">Home</h1>

       <v-container>
         <v-card class="mx-auto my-5" max-width="600">
           <v-card-title>
             <v-avatar size="80" class="mr-4">
               <v-icon size="80">mdi-account-circle</v-icon>
             </v-avatar>
             <div>
               <h2>{{ nombreCompleto }}</h2>
               <p>Fecha de Nacimiento: {{ fechaNacimiento }}</p>
             </div>
           </v-card-title>
     
           <v-card-text>
             <v-divider></v-divider>
             <h3 class="mt-4">Pasatiempos Favoritos:</h3>
             <v-chip-group column>
               <v-chip
                 v-for="(pasatiempo, index) in pasatiempos"
                 :key="index"
                 color="blue"
                 text-color="white"
                 class="ma-2"
               >
                 {{ pasatiempo }}
               </v-chip>
             </v-chip-group>
     
             <v-divider class="my-4"></v-divider>
             <h3>Películas Favoritas:</h3>
             <v-list dense>
               <v-list-item
                 v-for="(pelicula, index) in peliculasFavoritas"
                 :key="index"
               >
                 <v-list-item-icon>
                   <v-icon color="green">mdi-movie</v-icon>
                 </v-list-item-icon>
                 <v-list-item-content>{{ pelicula }}</v-list-item-content>
               </v-list-item>
             </v-list>
     
             <v-divider class="my-4"></v-divider>
             <h3>Lenguajes de Programación Favoritos:</h3>
             <v-list dense>
               <v-list-item
                 v-for="(lenguaje, index) in lenguajesProgramacionFavoritos"
                 :key="index"
               >
                 <v-list-item-icon>
                   <v-icon color="orange">mdi-code-tags</v-icon>
                 </v-list-item-icon>
                 <v-list-item-content>{{ lenguaje }}</v-list-item-content>
               </v-list-item>
             </v-list>
           </v-card-text>
         </v-card>
       </v-container>
   </v-container>
</template>
<script>
import { mapGetters } from 'vuex';
export default{
   
   name: 'HomeView',
   computed: {
    ...mapGetters([
      'getNombreCompleto',
      'getFechaNacimiento',
      'getPasatiempos',
      'getPeliculasFavoritas',
      'getLenguajesProgramacionFavoritos',
    ]),
    nombreCompleto() {
      return this.getNombreCompleto;
    },
    fechaNacimiento() {
      return this.getFechaNacimiento;
    },
    pasatiempos() {
      return this.getPasatiempos;
    },
    peliculasFavoritas() {
      return this.getPeliculasFavoritas;
    },
    lenguajesProgramacionFavoritos() {
      return this.getLenguajesProgramacionFavoritos;
    },
}
}
</script>