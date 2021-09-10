//Import; Wired DATABASE
const db = require('../../data/db-config')


//Helper Functions
const getAll = () => {
  // DO YOUR MAGIC
  return db('accounts')
}

async function getById(id) {
  // DO YOUR MAGIC
  const result = await db('accounts')
    .where('id', id).first()
  return result
}

async function create(account) {
  // DO YOUR MAGIC
  const [id] = await db('accounts')
    .insert(account)
  return getById(id)
}

async function updateById(id, account) {
  // DO YOUR MAGIC
  await db('accounts')
    .where('id', id)
    .update(account)
  return getById(id)
}

async function deleteById(id) {
  // DO YOUR MAGIC
  const toDelete = await getById(id)
  await db('accounts')
    .where({ id })
    .del()
  return toDelete
}


//Exports; Exposing
module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
