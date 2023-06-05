<script setup lang="ts">
import { oneUtilisateur } from '@/backend';
import { RouterLink } from 'vue-router';
import IconPanier from '@/components/icons/IconPanier.vue'
import { pb, } from '@/backend';
import IconProduitsAchetes from '@/components/icons/IconProduitsAchetes.vue';
import IconEconomies from '@/components/icons/IconEconomies.vue';
import CardRecette from '@/components/CardRecette.vue';
import CardProduit from '@/components/CardProduit.vue';
import RecetteRecord from '@/pocketbase-types.ts';

const props = defineProps<{
  id: string
}>()
const unUtilisateur = await oneUtilisateur(props.id)
console.log(unUtilisateur)

const urlImg0 =  unUtilisateur.photo_profil ? pb.getFileUrl(unUtilisateur, unUtilisateur.photo_profil[0], { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImg0)
</script>

<template>

<section class="" >
    <img class="rounded-full" :src="urlImg0" alt="">
    <div>
        <h2>{{ unUtilisateur.nom }}</h2>
        <p class="font-unbounded text-noir text-[10px]">{{ unUtilisateur.username }}</p>
        <RouterLink to="/mon-panier" class="bg-vert rounded-[25px]">
        <IconPanier />
        <p class="font-inter text-noir text-[10px] ">Voir mon panier</p>    
        </RouterLink>
    </div>

    <div class="grid grid-cols-2">

        <div class="bg-blanc rounded-[15px] ">
            <p>Economies faites</p>
            <IconEconomies />
            <p>{{ unUtilisateur.economies_faites }}</p>
        </div>

        <div class="bg-blanc rounded-[15px] ">
            <p>Produits achetés</p>
            <IconProduitsAchetes />
            <p>{{ unUtilisateur.produits_achetes }}</p>
        </div>


    </section>

    <section>
        <h2>Ce que vous recommandez</h2>
        
        <CardRecette v-for="uneRecette of RecetteRecord" v-bind="{ ...uneRecette }" />





    </section>









</div>

</template>