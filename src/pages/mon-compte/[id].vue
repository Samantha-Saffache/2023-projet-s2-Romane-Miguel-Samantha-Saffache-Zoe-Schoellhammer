<script setup lang="ts">
import { oneUtilisateur, favorisOneUtilisateur } from '@/backend';
import { RouterLink } from 'vue-router';
import IconPanier from '@/components/icons/IconPanier.vue'
import { pb, } from '@/backend';
import IconProduitsAchetes from '@/components/icons/IconProduitsAchetes.vue';
import IconEconomies from '@/components/icons/IconEconomies.vue';
import CardRecette from '@/components/CardRecette.vue';
import CardProduit from '@/components/CardProduit.vue';
import { estConnecté } from '@/auth'

const props = defineProps<{
  id: string
}>()
const unUtilisateur = await oneUtilisateur(props.id)
console.log(unUtilisateur)

const urlImg0 =  unUtilisateur.photo_profil ? pb.getFileUrl(unUtilisateur, unUtilisateur.photo_profil[0], { thumb: '100x250' }) : '/image-not-found.png'
console.log(urlImg0)

/* const recordsFavoris = await favorisOneUtilisateur()
console.log("favoris d'un utilisateur : ", recordsFavoris) */
</script>

<template>

<section class="lg:flex lg:flex-wrap gap-[80px] justify-center items-center" >
    <div class="flex justify-center items-center gap-[34px] mb-[48px]">
        <img class="rounded-[100%] w-[137px]" src="../../../public/img/profil.png" alt="">
        <div class="flex flex-col gap-[15px]">
            <h2 class="font-unbounded font-semibold text-noir text-[15px]">{{ unUtilisateur.nom }}</h2>
            <p class="font-unbounded text-orange text-[10px]">@{{ unUtilisateur.username }}</p>
            <RouterLink to="/mon-panier">
            <div class="bg-vert rounded-[25px] flex flex-row items-center justify-center py-[5px] gap-[5px] ">
                <IconPanier />
                <p class="font-inter text-noir text-[10px] ">Voir mon panier</p>
            </div>
            </RouterLink>
        </div>
    </div>

    <div class="flex flex-row justify-center gap-[10px]">

        <div class="bg-blanc rounded-[15px] px-[20px] py-[20px] flex flex-col items-center gap-[11px] ">
            <p class="font-unbounded font-medium text-noir text-[10px]">Economies faites</p>
            <IconEconomies />
            <p class="font-unbounded text-orange font-semibold ">{{ unUtilisateur.economies_faites }}</p>
        </div>

        <div class="bg-blanc rounded-[15px] px-[20px] py-[20px] flex flex-col items-center gap-[11px] ">
            <p class="font-unbounded font-medium text-noir text-[10px]">Produits achetés</p>
            <IconProduitsAchetes />
            <p class="font-unbounded text-orange font-semibold ">{{ unUtilisateur.produits_achetes }}</p>
        </div>

    </div>  
    </section>

    <section>
        <h2 class="font-unbounded font-semibold text-noir text-[15px] text-center mt-[67px]">Ce que vous recommandez</h2>
        
        <!--a importer en haut pour mettre nos favoris-->
       <!--  <CardRecette v-for="uneRecette of recordsFavoris" v-bind="{ ...uneRecette }" />
 -->
<RouterLink to="/publication"> 
    <div class="flex flex-col items-center gap-[13px]">
        <button class="px-[30px] py-[10px] mt-[200px] bg-jaune rounded-[100%] font-unbounded font-light text-noir text-[50px] text-center">+</button>
        <p class="font-inter text-noir text-[13px]">Publier du contenu</p>
    </div>
</RouterLink>


    </section>  

</template>