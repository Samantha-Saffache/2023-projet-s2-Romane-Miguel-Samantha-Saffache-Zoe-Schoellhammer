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
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold font-unbounded text-orange my-4">Je publie ma
      <h1 class="text-2xl font-bold font-unbounded text-vert_fonce my-4">recette</h1>
    </h1>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="nom_recette" class="create-item">Nom de la recette</label>
        <input v-model="recetteData.nom_recette" type="text" id="nom_recette" class="border border-gray-300 rounded-md p-2 w-full" required>
      </div>
      <div class="mb-4">
        <label for="temps_preparation" class="create-item">Temps de préparation</label>
        <input v-model="recetteData.temps_preparation" type="text" id="temps_preparation" class="border border-gray-300 rounded-md p-2 w-full" required>
      </div>
      <div class="mb-4">
        <label for="temps_cuisson" class="create-item">Temps de cuisson</label>
        <input v-model="recetteData.temps_cuisson" type="text" id="temps_cuisson" class="border border-gray-300 rounded-md p-2 w-full" required>
      </div>
      <div class="mb-4">
        <label for="ingredients" class="create-item">Les ingrédients</label>
        <input v-model="recetteData.ingredients" type="text" id="ingredients" class="border border-gray-300 rounded-md p-2 w-full" required>
      </div>
      <div class="mb-4">
        <label for="etapes" class="create-item">Les étapes</label>
        <input v-model="recetteData.etapes" type="text" id="etapes" class="border border-gray-300 rounded-md p-2 w-full" required>
      </div>
      <button type="submit" class="font-unbounded font-bold text-beige bg-orange py-[14px] px-[67px] rounded-full">Publier</button>
    </form>
  </div>
</template>

