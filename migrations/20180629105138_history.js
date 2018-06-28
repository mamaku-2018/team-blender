exports.up = (knex, Promise) => {
  return knex.schema.createTable('history', table => {
    table.increments('id').primary()
    table.integer('student_id')
    table.string('team')
    table.integer('week')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('history')
}
