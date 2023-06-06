import { pb } from '@/backend'
import type { AuthSystemFields, UsersRecord, UsersResponse } from '@/pocketbase-types'
import { ref } from 'vue'

type MaybeUser = UsersResponse | null

/** Permet de savoir si l'on est connecté ou pas
 * @prop {RecordIdString} id de l'utilisateur (utile pour relations)
 *  @prop {string} username 
 */
export const estConnecté = ref(null as MaybeUser)

// Surveille la connexion pour maintenir `estConnecté` à jour                                    
pb.authStore.onChange(() => {
  estConnecté.value = pb.authStore.model as MaybeUser}, true)
 //true pour le tester de suite


export async function login() {
  const authData = await pb.collection('users').authWithOAuth2({ provider: 'google' })
  console.log(authData)
  return authData
}
/** Deconnexion */
export function logout() {
  pb.authStore.clear()
}