
const db = require('../../data/db-config');

function find() {
  return db('users')
}


function findBy(filter) {
  return db('users').where('filter', filter).first()
}


function findById(user_id) {
  return db('users').where('user_id', user_id).first()
}


function add(user) {
  db('users').insert(user).then(([id]) => findById(id))
}

module.exports = {
  find, 
  findBy,
  findById,
  add
}