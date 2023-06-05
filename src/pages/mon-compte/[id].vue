<script setup lang="ts">
import { oneUtilisateur, favorisOneUtilisateur } from '@/backend';
import { RouterLink } from 'vue-router';
import IconPanier from '@/components/icons/IconPanier.vue'
import { pb, } from '@/backend';
import IconProduitsAchetes from '@/components/icons/IconProduitsAchetes.vue';
import IconEconomies from '@/components/icons/IconEconomies.vue';
import CardRecette from '@/components/CardRecette.vue';
import CardProduit from '@/components/CardProduit.vue';

const props = defineProps<{
  id: string
}>()
const unUtilisateur = await oneUtilisateur(props.id)
console.log(unUtilisateur)

const urlImg0 =  unUtilisateur.photo_profil ? pb.getFileUrl(unUtilisateur, unUtilisateur.photo_profil[0], { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImg0)

const recordsFavoris = await favorisOneUtilisateur()
console.log("favoris d'un utilisateur : ", recordsFavoris)
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
        
        <!--a importer en haut-->
        <CardRecette v-for="uneRecette of RecetteRecord" v-bind="{ ...uneRecette }" />

<div>
    <button class="mt-[200px] bg-jaune rounded-[100%] font-unbounded font-light text-noir text-[50px] ">+</button>
    <p class="font-inter text-noir text-[13px]">Publier du contenu</p>
</div>


    </section>









</div>

</template>