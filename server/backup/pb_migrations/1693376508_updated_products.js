migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fb6jixr6744x22a")

  collection.listRule = ""
  collection.viewRule = ""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("fb6jixr6744x22a")

  collection.listRule = null
  collection.viewRule = null

  return dao.saveCollection(collection)
})
