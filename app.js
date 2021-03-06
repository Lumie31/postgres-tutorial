const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')

// Instantiate the express function in the an app variable
const app = express()

app.use(logger('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}))

require('./server/routes')(app)
app.get('*', (req, res) => res.status(200).send({
  message: "Welcome to the beginning of greatness"
}))

module.exports = app