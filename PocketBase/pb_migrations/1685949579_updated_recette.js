migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("so5ranudq7j9g66")

  // remove
  collection.schema.removeField("r070alec")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("so5ranudq7j9g66")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r070alec",
    "name": "favoris",
    "type": "bool",
    "required": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
})
