<script setup lang="ts">
import { ref } from 'vue';
import { createProduit } from '@/backend';
import type { ProduitRecord } from '@/pocketbase-types';
import ImporterIcon from '@/components/icons/IconImporter.vue';

const produitData = ref<ProduitRecord>({
  nom_produit: '',
  poids: '',
  prix: '',
  //ajouter une image//
});

async function submitForm() {
try {

  await createProduit(produitData.value);

  console.log('Produit ajouté avec succès');
  // Réinitialiser le formulaire
 produitData.value = {
  nom_produit: '',
  poids: '',
  prix: '',
  };
} catch (error) {
  console.error('Erreur lors de la création du produit', error);
}
}
</script>

<template>

  <div  class="pt-24 mx-[30px]">

    <div class="container mx-auto">
      <h1 class="font-bold font-unbounded text-orange text-[24px] my-4 text-center 	">Je publie un
        <h1 class="font-bold font-unbounded text-vert_fonce text-[24px] mt-4 mb-[60px] text-center leading-[0px]">produit !</h1>
      </h1>
      <form @submit.prevent="submitForm">
        <div class="mb-[37px]">
          <label for="nom_produit" class="create-item">Nom du produit</label>
          <input v-model="produitData.nom_produit" type="text" id="nom_produit" class="bg-beige border-b-[1px] border-vert rounded-md  w-full " required>
        </div>
        <div class="mb-[37px]">
          <label for="temps_preparation" class="create-item ">Poids</label>
          <input v-model="produitData.poids" type="text" id="poids" class="bg-beige border-b-[1px] border-vert rounded-md  w-full " required>
        </div>
        <div class="mb-[37px]">
          <label for="temps_cuisson" class="create-item">Prix</label>
          <input v-model="produitData.prix" type="text" id="prix" class="bg-beige border-b-[1px] border-vert rounded-md  w-full " required>
        </div>

        <div class="flex flex-col items-center mb-[57px]">
          <button class="font-unbounded text-noir text-[20px] bg-jaune rounded-[100%] px-5 py-[10px]">+</button>
          <p class="font-inter text-[13px]">Ajouter une étape</p>
        </div>

        <!-- sélectionner photos -->
        <p class="create-item mb-[14px]">Image</p>
        <div class="mb-[60px] flex items-center justify-center w-full ">
          <label for="image" class="flex flex-col items-center justify-center w-full rounded-[15px] bg-jaune px-[100px] py-[20px]  cursor-pointer">
          <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <span ><ImporterIcon /></span>
        </div>
          <input id="image" type="file" class="hidden" />
          </label>
        </div> 

        <!-- centrer ce bouton !!!! -->
        <button type="submit" class="font-unbounded font-bold text-beige bg-orange py-[14px] px-[67px] rounded-[28px]">Publier</button>
      </form>
    </div>

  </div>
</template>

