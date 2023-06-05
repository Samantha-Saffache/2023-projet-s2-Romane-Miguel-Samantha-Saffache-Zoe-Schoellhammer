<script setup lang="ts">
 import { RouterLink } from 'vue-router';
 import Localisation from '@/components/icons/localisation.vue';
 import CardUtilisateur from '@/components/CardUtilisateur.vue';
 import type { RecetteResponse } from '@/pocketbase-types';
 import { pb, oneRecette, allRecettes } from '../backend'
</script>

<template>
    
    <div class="bg-blanc rounded-[15px] flex flex-col justify-center items-center max-w-[104px] px-[6px] py-[10px] gap-[5px]">
        <!--  <RouterLink to="#"> -->
           <img src="../../public/img/profil.png" class="rounded-full" alt="photo de profil">
           <p class="font-unbounded text-orange text-[8px]">@sylvie.adnt</p>
        <!--  </RouterLink> -->
    
         <Localisation />
    
         <p class="font-inter text-noir text-[13px] text-center leading-4 mb-[5px]">Bourg-les-Valences</p>
         <RouterLink to="/messagerie" class="text-uppercase text-orange font-unbounded font-bold bg-vert w-full text-center py-[10px] rounded-[33px] uppercase text-sm">message</RouterLink>
       </div>
</template>