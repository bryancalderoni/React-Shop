migrate((db) => {
  const collection = new Collection({
    "id": "q2fg7qgsl8xujgt",
    "created": "2023-08-30 06:25:32.260Z",
    "updated": "2023-08-30 06:25:32.260Z",
    "name": "orders",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "nn1zonky",
        "name": "order",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "u71fycx4",
        "name": "user",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "7mnb1dcf",
        "name": "total",
        "type": "number",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null
        }
      },
      {
        "system": false,
        "id": "czdgqk2w",
        "name": "status",
        "type": "select",
        "required": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "values": [
            "pending",
            "done"
          ]
        }
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": "",
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("q2fg7qgsl8xujgt");

  return dao.deleteCollection(collection);
})
