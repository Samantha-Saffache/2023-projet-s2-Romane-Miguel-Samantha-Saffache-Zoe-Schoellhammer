<script setup lang="ts">

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
  <RouterLink to="#">
    <img src="../../public/img/profil.png" class="rounded-full" alt="photo de profil">
    <p class="font-unbounded text-orange text-[8px]">@sylvie.adnt</p>
  </RouterLink>
  
  <Localisation />
  
  <p class="font-inter text-noir text-[13px] text-center leading-4 mb-[5px]">Bourg-les-Valences</p>
  <RouterLink to="/messagerie" class="text-uppercase text-orange font-unbounded font-bold bg-vert w-full text-center py-[10px] rounded-[33px] uppercase text-sm">message</RouterLink>
</div>

</article>

  </template>