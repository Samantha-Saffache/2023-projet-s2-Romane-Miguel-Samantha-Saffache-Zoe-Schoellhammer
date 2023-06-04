import PocketBase from 'pocketbase' ;
export const pb = new PocketBase('http://127.0.0.1:8090');
import { type ProduitResponse, type RecetteRecord, type RecetteResponse  } from './pocketbase-types';
import { type ProduitRecord  } from './pocketbase-types';

/* créer une recette */
export async function createRecette(recetteData: RecetteRecord) {
    try {
      const response = await pb.collection('recette').create(recetteData);
      console.log('Recette créée avec succès', response);
      return response;
    } catch (error) {
      console.error('Erreur lors de la création de la recette', error);
      throw error;
    }
  }

/* créer un produit */
  export async function createProduit(produitData: ProduitRecord) {
    try {
      const response = await pb.collection('produit').create(produitData);
      console.log('Produit ajouté avec succès', response);
      return response;
    } catch (error) {
      console.error('Erreur lors de la création du produit', error);
      throw error;
    }
  }

  /* affiche une recette */
  export async function oneRecette(id: string) {
    return await pb.collection('recette').getOne<RecetteResponse>(id, { expand: 'recette(utilisateur)' })
  }

  /* affiche toutes les recettes */
  export async function allRecettes() {
    const recordsRecettes = await pb.collection("recette").getFullList();
    return recordsRecettes;

}

/* affiche un produit */
  export async function oneProduit(id: string) {
    return await pb.collection('produit').getOne<ProduitResponse>(id, { expand: 'produit(utilisateur)' })
  }

 /* affiche tous les produits */ 
  export async function allProduits() {
    const recordsProduits = await pb.collection("produit").getFullList();
    return recordsProduits;
   
}