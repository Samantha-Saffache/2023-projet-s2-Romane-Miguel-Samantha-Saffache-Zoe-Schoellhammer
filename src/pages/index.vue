<script setup lang="ts">
import { RouterView } from 'vue-router';
import CardRecette from '@/components/CardRecette.vue';
import CardProduit from '@/components/CardProduit.vue';
import CardUtilisateur from '@/components/CardUtilisateur.vue';
 import { allRecettes, oneUtilisateur } from '@/backend';
import type { UsersResponse } from '@/pocketbase-types';

 const recordsRecettes = await allRecettes()
console.log(recordsRecettes)  

/* const recordUser = await oneUtilisateur()
console.log(recordUser)  */





/* import { pb, oneRecette, } from '../backend';

const props = defineProps<{
  id: string
}>()
const uneRecette = await oneRecette(props.id)
console.log(uneRecette)
const utilisateur = uneRecette.expand.utilisateur */



</script>

<template>
  
    <div class="grid grid-cols-3 justify-center justify-items-center">
      <RouterLink to="/" class="text-[15px] font-unbounded font-bold text-vert_fonce mb-9 uppercase">recettes</RouterLink>
      <p class="text-[15px] font-unbounded text-vert_fonce mb-9 uppercase">|</p>
      <RouterLink to="/produits" class="text-[15px] font-unbounded text-vert_fonce mb-9 uppercase">produits</RouterLink>
    </div>
     

     <section class="lg:grid lg:grid-cols-4">

       <!-- <article class="flex flex-row justify-center gap-[7px] mb-[42px]">  -->
         
             <CardRecette  v-for="uneRecette of recordsRecettes" v-key="uneRecette.id" v-bind="{...uneRecette}" /> <!-- v-for="uneRecette of recordsRecettes" v-key="uneRecette.id" v-bind="{...uneRecette}"  -->
           
            <!--   <CardUtilisateur v-for="unUtilisateur of recordUser" v-key="unUtilisateur.id" v-bind="{...unUtilisateur}" /> -->
        
        
        
         <!-- <CardUtilisateurMini v-bind="{... utilisateur}"/> -->
      <!--  </article> -->
     </section>


     
    


  
</template>
