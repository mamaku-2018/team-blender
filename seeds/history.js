exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('history').del()
    .then(function () {
      // Inserts seed entries
      return knex('history').insert([
        {id: 1, student_id: 1, team: 'Pegasus', week: 1},
        {id: 1, student_id: 2, team: 'Dragon', week: 1},
        {id: 1, student_id: 3, team: 'Pegasus', week: 1},
        {id: 1, student_id: 4, team: 'Dragon', week: 1},
        {id: 1, student_id: 5, team: 'Pegasus', week: 1}

      ])
    })
}
