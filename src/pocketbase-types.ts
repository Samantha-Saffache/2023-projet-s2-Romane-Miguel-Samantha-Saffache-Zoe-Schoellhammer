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
	prix?: number
}

export type RecetteRecord = {
	image?: string[]
	nom_recette?: string
	temps_preparation?: IsoDateString
	temps_cuisson?: IsoDateString
	ingredients?: HTMLString
	etapes?: HTMLString
	field?: RecordIdString
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type ProduitResponse = Required<ProduitRecord> & BaseSystemFields
export type RecetteResponse<Texpand = unknown> = Required<RecetteRecord> & BaseSystemFields<Texpand>
export type UsersResponse = Required<UsersRecord> & AuthSystemFields

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