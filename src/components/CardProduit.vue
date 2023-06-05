<script setup lang="ts">
 import Localisation from '@/components/icons/localisation.vue';
 import { pb } from '@/backend'
 import type { ProduitResponse } from '../pocketbase-types'

  const props: ProduitResponse = defineProps<ProduitResponse>()


  const urlImg0 =  props.image ? pb.getFileUrl(props, props.image[0], { thumb: '100x250' }) : '/image-not-found.png'
  console.log(urlImg0)

  const url = `/produits/${props.id}`
</script>

<template>

    <article class="flex flex-row justify-center gap-[7px] mb-[42px]">

<RouterLink to="#" >
  <div class="bg-blanc rounded-[15px] px-[10px] py-[10px] max-w-[205px]">
    <img :src="urlImg0" class="rounded-[10px] w-full max-w-[184px] mb-[18px]"  alt="">
    <h3>
      
      <p class="font-semibold uppercase font-unbounded text-orange text-[10px]">{{ props.nom_produit }}</p>
      
      <p class="uppercase font-unbounded text-orange text-[10px]">{{ props.prix }}</p>

    </h3>
  </div>
</RouterLink>

<div class="bg-blanc rounded-[15px] flex flex-col justify-center items-center max-w-[104px] px-[6px] py-[10px] gap-[5px]">
  <!-- <RouterLink to="#"> -->
    <img src="../../public/img/profil.png" class="rounded-[100%] w-[55px]" alt="photo de profil">

    
    <p class="font-unbounded text-orange text-[8px]">{{ props.utilisateur }}</p>

 <!--  </RouterLink> -->
  <Localisation />
  <p class="font-inter text-noir text-[13px] text-center leading-4 mb-[5px]">{{ props.localisation }}</p>
  <RouterLink to="/messagerie" class="text-uppercase text-orange font-unbounded font-bold bg-vert w-full text-center py-[10px] rounded-[33px] uppercase text-sm">message</RouterLink>
</div>

</article>

  </template>

