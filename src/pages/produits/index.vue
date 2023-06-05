<script setup lang="ts">
import { RouterView } from 'vue-router';
import CardProduit from '@/components/CardProduit.vue'

import { allProduits, } from '@/backend';
 const recordsProduit = await allProduits()
console.log(recordsProduit)  
</script>

<template>
  
  <div class="grid grid-cols-3 justify-center justify-items-center">
      <RouterLink to="/" class="text-[15px] font-unbounded text-vert_fonce mb-9 uppercase">recettes</RouterLink>
      <p class="text-[15px] font-unbounded text-vert_fonce mb-9 uppercase">|</p>
      <RouterLink to="#" class="text-[15px] font-unbounded font-bold text-vert_fonce mb-9 uppercase">produits</RouterLink>
    </div>
    <section class="lg:grid lg:grid-cols-4">
    <CardProduit v-for="unProduit in recordsProduit" :key="unProduit.id" v-bind="{...unProduit}"/>
    </section>


  
</template>