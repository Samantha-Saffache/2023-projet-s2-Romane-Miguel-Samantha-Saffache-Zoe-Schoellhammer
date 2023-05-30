migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2iqwzv3nrgzxdl1")

  // remove
  collection.schema.removeField("f5nru8ns")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mj4orpj0",
    "name": "prix",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2iqwzv3nrgzxdl1")

  // add
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

  // remove
  collection.schema.removeField("mj4orpj0")

  return dao.saveCollection(collection)
})
