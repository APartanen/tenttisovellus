
const morgan = require('morgan')
const jwt = require('jsonwebtoken')
let morg = {
  morgan: morgan(':method :url :status :total-time[4] ms :body')
}
const testData = require('../Utils/testData')
let tentit = testData.tentit
let users = testData.users
//Request tokens
morgan.token('body', function(request) {
  let body = JSON.stringify(request.body)
  return body
})

function fn1 (request, response, next) {
  console.log(request.body)
  request.user = request.body.username
  next()
}

let fn = {
  fn1: fn1,
}

module.exports = { morg, fn }