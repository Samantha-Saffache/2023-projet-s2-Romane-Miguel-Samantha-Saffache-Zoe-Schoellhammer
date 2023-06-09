/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Produit = "produit",
	Recette = "recette",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type ProduitRecord = {
	image?: string[]
	nom_produit?: string
	poids?: string
	prix?: string
	utilisateur?: RecordIdString
}

export type RecetteRecord = {
	image?: string[]
	nom_recette?: string
	temps_preparation?: string
	temps_cuisson?: string
	ingredients?: HTMLString
	etapes?: HTMLString
	utilisateur?: RecordIdString
}

export enum UsersStatutOptions {
	"agriculteur" = "agriculteur",
	"particulier" = "particulier",
}
export type UsersRecord = {
	nom?: string
	photo_profil?: string
	statut?: UsersStatutOptions
	localisation?: string
	economies_faites?: number
	produits_achetes?: number
	favoris_recettes?: RecordIdString[]
	favoris_produits?: RecordIdString[]
}

// Response types include system fields and match responses from the PocketBase API
export type ProduitResponse<Texpand = unknown> = Required<ProduitRecord> & BaseSystemFields<Texpand>
export type RecetteResponse<Texpand = unknown> = Required<RecetteRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	produit: ProduitRecord
	recette: RecetteRecord
	users: UsersRecord
}

export type CollectionResponses = {
	produit: ProduitResponse
	recette: RecetteResponse
	users: UsersResponse
}