migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2iqwzv3nrgzxdl1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f5nru8ns",
    "name": "prix",
    "type": "number",
    "required": true,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2iqwzv3nrgzxdl1")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "f5nru8ns",
    "name": "prix",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
