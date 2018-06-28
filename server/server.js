const path = require('path')
const express = require('express')

// const fruitRoutes = require('./routes/mainRoutes')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

// server.use('/api/v1/peeps', mainRoutes)

module.exports = server
