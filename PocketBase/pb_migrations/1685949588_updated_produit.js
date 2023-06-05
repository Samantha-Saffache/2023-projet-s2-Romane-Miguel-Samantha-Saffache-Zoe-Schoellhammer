migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2iqwzv3nrgzxdl1")

  // remove
  collection.schema.removeField("lcmb8twf")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2iqwzv3nrgzxdl1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lcmb8twf",
    "name": "favoris",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
