import PocketBase from 'pocketbase' ;
export const pb = new PocketBase('http://127.0.0.1:8090');
import { type ProduitRecord, type ProduitResponse,
        type RecetteRecord, type RecetteResponse,
        type UsersRecord, type UsersResponse,  } from './pocketbase-types';


        
     

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
    return await pb.collection('recette').getOne<RecetteResponse>(id, { expand: 'utilisateur' })
  }

  /* affiche toutes les recettes */
  export async function allRecettes() {
    const recordsRecettes = await pb.collection("recette").getFullList<RecetteResponse>();
    return recordsRecettes;

}

/* affiche un produit */
  export async function oneProduit(id: string) {
    return await pb.collection('produit').getOne<ProduitResponse>(id, { expand: 'produit(utilisateur)' })
  }

 /* affiche tous les produits */ 
  export async function allProduits() {
    const recordsProduits = await pb.collection('produit').getFullList<ProduitResponse>();
    return recordsProduits;
   
}

export async function oneUtilisateur(id: string) {
  return await pb.collection('users').getOne<UsersResponse>(id)
}

/* faire une fonction pour voir les favoris d'un utilisateur */
export async function favorisOneUtilisateur(id: string) {
  return await pb.collection('users').getFullList<UsersResponse>(id, {expand : 'users(favoris)'})