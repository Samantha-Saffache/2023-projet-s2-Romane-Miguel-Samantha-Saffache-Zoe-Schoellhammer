<script setup lang="ts">
	import { RouterView } from 'vue-router'
  import HeaderPage from './components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue'
import CardRecette from './components/CardRecette.vue'

</script>


<template>
<HeaderPage />
  
<main class="bg-beige">
 <RouterView />

  <h5 class="text-vert_fonce">recettes | produits</h5>
 
 <CardRecette />

 


</main>
<FooterPage />
</template>