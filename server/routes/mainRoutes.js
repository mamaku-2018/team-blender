const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getStudents()
    .then(students => {
      res.json({students})
    })
    .catch(err => {
      res.status(500).send('Database error: ' + err.message)
    })
})

router.post('/insert', (req, res) => {
  const newStudent = req.body.name
  db.addStudent(newStudent)
    .then((ids) => {
      db.getStudent(ids[0])
        .then((student) => {
          res.json(student)
        })
    })
    .catch(err => {
      res.status(500).send('Database error: ' + err.message)
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  db.deleteStudent(id)
    .then(() => {
      res.status(200).end()
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
module.exports = router
