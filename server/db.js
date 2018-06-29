const path = require('path')
const config = require(path.join(__dirname, '../knexfile')).development
const knex = require('knex')(config)

module.exports = {
  getStudents,
  getStudent,
  addStudent,
  deleteStudent
}

function getStudent (id, testDb) {
  const db = testDb || knex
  return db('students')
    .where('id', id)
    .select()
    .first()
}

function getStudents (testDb) {
  const db = testDb || knex
  return db('students')
    .select()
}

function addStudent (name, testDb) {
  const db = testDb || knex
  return db('students')
    .insert({name: name})
}

function deleteStudent (id, testDb) {
  const db = testDb || knex
  return db('students')
    .where('id', id)
    .del()
}
