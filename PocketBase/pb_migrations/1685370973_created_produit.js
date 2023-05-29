migrate((db) => {
  const collection = new Collection({
    "id": "2iqwzv3nrgzxdl1",
    "created": "2023-05-29 14:36:13.036Z",
    "updated": "2023-05-29 14:36:13.036Z",
    "name": "produit",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xxzpvpfn",
        "name": "image",
        "type": "file",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 99,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/png",
            "image/jpeg"
          ],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "xsn7ftwt",
        "name": "nom_produit",
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
        "id": "f5nru8ns",
        "name": "prix",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
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
  const collection = dao.findCollectionByNameOrId("2iqwzv3nrgzxdl1");

  return dao.deleteCollection(collection);
})
