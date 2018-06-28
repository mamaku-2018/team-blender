const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/home', (req, res) => {
  db.getPeeps()
    .then(codeWarriors => {
      res.json({codeWarriors})
    })
    .catch(err => {
      res.status(500).send('Database error: ' + err.message)
    })
})

module.exports = router
