<script setup lang="ts">
 import Localisation from '@/components/icons/localisation.vue';
</script>

<template>

    <article class="flex flex-row justify-center gap-[7px] mb-[42px]">

<RouterLink to="#" >
  <div class="bg-blanc rounded-[15px] px-[10px] py-[10px]">
    <img src="../../public/img/confiture.png" class="rounded-[10px] w-full mb-[18px]" alt="">
    <h3>
      <p class="font-semibold uppercase font-unbounded text-orange text-[10px]">Confiture de coing - 300g</p>
      <p class="uppercase font-unbounded text-orange text-[10px]">8.00€</p>
    </h3>
  </div>
</RouterLink>

<div class="bg-blanc rounded-[15px] flex flex-col justify-center items-center max-w-[104px] px-[6px] py-[10px] gap-[5px]">
  <!-- <RouterLink to="#"> -->
    <img src="../../public/img/profil.png" class="rounded-full" alt="photo de profil">
    <p class="font-unbounded text-orange text-[8px]">@sylvie.adnt</p>
 <!--  </RouterLink> -->
  
  <Localisation />
  
  <p class="font-inter text-noir text-[13px] text-center leading-4 mb-[5px]">Bourg-les-Valences</p>
  <RouterLink to="/messagerie" class="text-uppercase text-orange font-unbounded font-bold bg-vert w-full text-center py-[10px] rounded-[33px] uppercase text-sm">message</RouterLink>
</div>

</article>

  </template>


<!--a ajouter en fonction du pocketbase pour avoir les fonctions de produit-->
<script setup lang="ts">
import { pb } from '@/backend'
import type { ArtisteResponse } from '../../pocketbase/pocketbase-types'

  const props: ArtisteResponse = defineProps<ArtisteResponse>()


  const urlImg0 =  props.image_artiste ? pb.getFileUrl(props,  props.image_artiste, { thumb: '100x250' }) : '/image-not-found.png'
  console.log(urlImg0)

  const urlImg1 =  props.image_2_artiste ? pb.getFileUrl(props,  props.image_2_artiste, { thumb: '100x250' }) : '/image-not-found.png'
  console.log(urlImg0)
  const url = `/artistes/${props.id}`
</script>

<template>
    <article class="mb-5 col-span-4 grid grid-cols-[24px_1fr] grid-rows-[200px_48px_1fr] lg:grid-cols-[2fr_11fr]">
      <img class="col-start-1 row-start-1 col-span-2 row-span-2" :src="urlImg0" alt="">
      <h3 class="z-[1] col-start-2 row-start-1 my-6 mr-4 self-end font-sans text-xl text-blanc">
        <RouterLink class="col-span-2" to="/">{{ props.nom_artiste }}</RouterLink>
      </h3>
      <div class="z-10 col-span-1 col-start-2 row-span-2 row-start-2 space-y-4 bg-beige p-6 ">
        <p>{{ props.date_naissance_artiste }}</p>
        <p class="font-serif"> {{ props.excerpt_artiste }}</p>
        <RouterLink class="inline-block border-b-2 border-noir uppercase hover:text-blanc" :to="`${url}`">Plus d'info</RouterLink>
      </div>
    </article>
  </template>