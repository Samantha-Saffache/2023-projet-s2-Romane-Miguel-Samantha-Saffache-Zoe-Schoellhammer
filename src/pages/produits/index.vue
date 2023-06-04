<script setup lang="ts">
import { RouterView } from 'vue-router';
import CardProduit from '@/components/CardProduit.vue'
</script>

<template>
  
    <div class="grid grid-cols-3 justify-center">
      <RouterLink to="#" class="text-xl font-unbounded text-vert_fonce mb-9 uppercase">recettes</RouterLink>
      <p class="text-xl font-unbounded text-vert_fonce mb-9 uppercase">|</p>
      <RouterLink to="#" class="text-xl font-unbounded font-bold text-vert_fonce mb-9 uppercase">produits</RouterLink>
    </div>
     
    <CardProduit />
    


  
</template>