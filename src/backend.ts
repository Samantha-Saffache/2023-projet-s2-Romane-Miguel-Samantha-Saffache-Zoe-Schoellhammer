import PocketBase from 'pocketbase' ;
export const pb = new PocketBase('http://127.0.0.1:8090');
import { type RecetteRecord  } from './pocketbase-types';

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