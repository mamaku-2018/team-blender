const path = require('path')
const express = require('express')

const mainRoutes = require('./routes/mainRoutes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/v1/students', mainRoutes)

module.exports = server
