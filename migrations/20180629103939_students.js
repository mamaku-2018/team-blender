exports.up = (knex, Promise) => {
  return knex.schema.createTable('students', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('emoji')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('students')
}
