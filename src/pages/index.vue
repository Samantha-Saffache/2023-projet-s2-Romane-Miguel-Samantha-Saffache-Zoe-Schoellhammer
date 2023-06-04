<script setup lang="ts">
import { RouterView } from 'vue-router';
import CardRecette from '@/components/CardRecette.vue';
import CardProduit from '@/components/CardProduit.vue';

/* import { allRecettes, } from '@/backend';
 const recordsRecettes = await allRecettes()
console.log("toutes les recettes depuis pb : ", recordsRecettes) */


</script>

<template>
  
    <div class="grid grid-cols-3 justify-center justify-items-center">
      <RouterLink to="#" class="text-[15px] font-unbounded font-bold text-vert_fonce mb-9 uppercase">recettes</RouterLink>
      <p class="text-[15px] font-unbounded text-vert_fonce mb-9 uppercase">|</p>
      <RouterLink to="/produits" class="text-[15px] font-unbounded text-vert_fonce mb-9 uppercase">produits</RouterLink>
    </div>
     

     <section class="lg:grid lg:grid-cols-4">
       <CardRecette /> <!-- v-for="uneRecette of recordsRecettes"  v-bind="{...uneRecette}" -->
     </section>

    
    


  
</template>
