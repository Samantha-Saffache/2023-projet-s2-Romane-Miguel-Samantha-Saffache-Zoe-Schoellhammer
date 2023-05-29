migrate((db) => {
  const collection = new Collection({
    "id": "so5ranudq7j9g66",
    "created": "2023-05-29 14:27:33.348Z",
    "updated": "2023-05-29 14:27:33.348Z",
    "name": "recette",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wibdrmao",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "igvghsgp",
        "name": "nom_recette",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
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
      },
      {
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
      },
      {
        "system": false,
        "id": "leeyg4rf",
        "name": "ingredients",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "4mhiknbf",
        "name": "etapes",
        "type": "editor",
        "required": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("so5ranudq7j9g66");

  return dao.deleteCollection(collection);
})
