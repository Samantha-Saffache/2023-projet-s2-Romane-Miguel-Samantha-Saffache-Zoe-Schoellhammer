migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2iqwzv3nrgzxdl1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qs5lulkq",
    "name": "poids",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nkcxiklo",
    "name": "field",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2iqwzv3nrgzxdl1")

  // remove
  collection.schema.removeField("qs5lulkq")

  // remove
  collection.schema.removeField("nkcxiklo")

  return dao.saveCollection(collection)
})
