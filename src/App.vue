<script setup lang="ts">
	import { RouterView } from 'vue-router'
  import HeaderPage from './components/HeaderPage.vue'
import FooterPage from './components/FooterPage.vue'
import Card from './components/Card.vue'

</script>


<template>
  <HeaderPage />
  
<main class="bg-beige">
 <RouterView />

 <h5 class="text-vert_fonce">recettes | produits</h5>
 
 <Card />

 


</main>

<FooterPage />
</template>