<script setup lang="ts">
import { ref } from 'vue';
import { createProduit } from '@/backend';
import type { ProduitRecord } from '@/pocketbase-types';

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
  <div class="container mx-auto">
    <h1 class="text-2xl font-bold font-unbounded text-orange text-[24px] my-4">Je publie un
        <h1 class="text-2xl font-bold font-unbounded text-vert_fonce text-[24px] my-4">produit !</h1>
    </h1>
    <form @submit.prevent="submitForm">
      <div class="mb-4">
        <label for="nom_produit" class="create-item">Nom du produit</label>
        <input v-model="produitData.nom_produit" type="text" id="nom_produit" class="bg-transparent " required>
      </div>
      <div class="mb-4">
        <label for="temps_preparation" class="create-item ">Poids</label>
        <input v-model="produitData.poids" type="text" id="poids" class="bg-transparent" required>
      </div>
      <div class="mb-4">
        <label for="temps_cuisson" class="create-item">Prix</label>
        <input v-model="produitData.prix" type="text" id="prix" class="bg-transparent" required>
      </div>
     
      <button type="submit" class="font-unbounded font-bold text-beige bg-orange py-[14px] px-[67px] rounded-full">Publier</button>
    </form>
  </div>
</template>

