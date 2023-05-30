migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qvii5aqg",
    "name": "statut",
    "type": "select",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "values": [
        "agriculteur",
        "particulier"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b1xjcges",
    "name": "economies_faites",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gybrpuci",
    "name": "produits_achetes",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("_pb_users_auth_")

  // remove
  collection.schema.removeField("qvii5aqg")

  // remove
  collection.schema.removeField("b1xjcges")

  // remove
  collection.schema.removeField("gybrpuci")

  return dao.saveCollection(collection)
})
