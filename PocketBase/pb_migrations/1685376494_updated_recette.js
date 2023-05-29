migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("so5ranudq7j9g66")

  // remove
  collection.schema.removeField("m7i2k54u")

  // remove
  collection.schema.removeField("ownevdvj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fii7mgfk",
    "name": "temps_preparation",
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
    "id": "g9d9zln4",
    "name": "temps_cuisson",
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
  const collection = dao.findCollectionByNameOrId("so5ranudq7j9g66")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "m7i2k54u",
    "name": "temps_preparation",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ownevdvj",
    "name": "temps_cuisson",
    "type": "date",
    "required": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("fii7mgfk")

  // remove
  collection.schema.removeField("g9d9zln4")

  return dao.saveCollection(collection)
})
