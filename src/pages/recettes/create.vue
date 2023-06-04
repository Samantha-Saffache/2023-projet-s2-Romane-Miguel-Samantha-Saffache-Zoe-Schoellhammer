<script setup lang="ts">
import { ref } from 'vue';
import { createRecette } from '@/backend';
import type { RecetteRecord } from '@/pocketbase-types';

const recetteData = ref<RecetteRecord>({
  nom_recette: '',
  temps_preparation: '',
  temps_cuisson: '',
  ingredients: '',
  etapes: '',
  //ajouter une image//
});

async function submitForm() {
try {

  await createRecette(recetteData.value);

  console.log('Recette créée avec succès');
  // Réinitialiser le formulaire
  recetteData.value = {
  nom_recette: '',
  temps_preparation: '',
  temps_cuisson: '',
  ingredients: '',
  etapes: '',
  };
} catch (error) {
  console.error('Erreur lors de la création de la recette', error);
}
}


</script>

<template>

  <div class="py-24 mx-[30px]">

    <div class="container mx-auto">
      <h1 class="text-2xl font-bold font-unbounded text-orange text-[24px] my-4 text-center	">Je publie ma
<h1 class="text-2xl font-bold font-unbounded text-vert_fonce text-[24px]  mt-4 mb-[60px] text-center leading-[0px]">recette</h1>
      </h1>
      <form @submit.prevent="submitForm">
        <div class="mb-[37px]">
          <label for="nom_recette" class="create-item">Nom de la recette</label>
          <input v-model="recetteData.nom_recette" type="text" id="nom_recette" class="bg-beige border-b-[1px] border-vert rounded-md  w-full " required>
        </div>
        <div class="mb-[37px]">
          <label for="temps_preparation" class="create-item">Temps de préparation</label>
          <input v-model="recetteData.temps_preparation" type="text" id="temps_preparation" class="bg-beige border-b-[1px] border-vert rounded-md w-full" required>
        </div>
        <div class="mb-[37px]">
          <label for="temps_cuisson" class="create-item">Temps de cuisson</label>
          <input v-model="recetteData.temps_cuisson" type="text" id="temps_cuisson" class="bg-beige border-b-[1px] border-vert rounded-md w-full" required>
        </div>
        <div class="mb-[37px]">
          <label for="ingredients" class="create-item">Les ingrédients</label>
          <input v-model="recetteData.ingredients" type="text" id="ingredients" class="bg-beige border-b-[1px] border-vert rounded-md w-full" required>
        </div>
        <div class="mb-[37px]">
          <label for="etapes" class="create-item">Les étapes</label>
          <input v-model="recetteData.etapes" type="text" id="etapes" class="bg-beige border-b-[1px] border-vert rounded-md w-full" required>
        </div>
        <button type="submit" class="font-unbounded font-bold text-beige bg-orange py-[14px] px-[67px] rounded-[28px]">Publier</button>
      </form>
    </div>

  </div>
</template>

