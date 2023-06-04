<script setup lang="ts">
import PreparationIcon from '@/components/icons/IconPreparation.vue'  ;
import CuissonIcon from '@/components/icons/IconCuisson.vue'  ;
import FavorisIcon from '@/components/icons/IconFavoris.vue'  ;
import { pb, oneRecette, } from '../../backend';

/* const props = defineProps<{
  id: string
}>()
const uneRecette = await oneRecette(props.id)
console.log(uneRecette)
</script>
 */

<template>

<!-- hero recette --> 
   <div class="bg-blanc rounded-[15px] px-[15px] pt-4 pb-[20px] mb-[34px]">
    <div class="flex flex-col ">
        <img class="rounded-[10px] w-full mb-[18px]" src="../../public/img/crumble.png" alt="">
        <div class="flex flex-row gap-[9px]">
            <img class="object-contain" src="../../public/img/profil.png" alt="">
            <div class="flex flex-col">
                <p class="font-unbounded text-orange text-[10px]">{{ uneRecette.utilisateur }}</p>
                <p class="font-unbounded text-orange font-semibold text-[15px]">{{ uneRecette.nom_recette }}</p>
            </div>
            <FavorisIcon class="w-30 h-30" />
        </div>

     

    </div>
   
</div>

    <div class="bg-blanc rounded-[16px] mx-[80px] flex flex-row justify-around py-[9px] px-5">
       <div class="flex flex-col items-center gap-[6px]">
           <PreparationIcon />
           <p class="font-unbounded font-semibold text-noir text-[10px] ">{{ uneRecette.temps_preparation }}</p>
       </div>

       <div class="flex flex-col items-center gap-[6px]">
           <CuissonIcon />
           <p class="font-unbounded font-semibold text-noir text-[10px] ">{{ uneRecette.temps_cuisson}}</p>
       </div>

<!-- fin -->
       
    </div> 

    <div class="bg-blanc rounded-[26px] flex flex-col">
        <h2 class="uppercase">Ingrédients</h2>
        <div>
            <p>5 pommes
               90g sucre roux 
               110g beurre
               1 c. à c. citron 
               1 sachet sucre vanillé
               80g farine
            </p>
        </div>
    </div>

    <section class="flex flex-col">
        <div class="grid grid-cols-2">
            <p class="font-unbounded font-bold text-noir text-[24px]">1</p>
            <p class="font-inter text-noir text-[13px]">Préchauffer le four à 180°</p>
        </div>
    </section>

</template>


