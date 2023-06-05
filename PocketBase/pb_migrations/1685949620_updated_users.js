migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m76sjqga",
    "name": "favoris_recettes",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "so5ranudq7j9g66",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wey5wiwp",
    "name": "favoris_produits",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "2iqwzv3nrgzxdl1",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("m76sjqga")

  // remove
  collection.schema.removeField("wey5wiwp")

  return dao.saveCollection(collection)
})
