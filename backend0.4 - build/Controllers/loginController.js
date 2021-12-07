const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const testData = require('../Utils/testData')
let tentit = testData.tentit
let users = testData.users

//kirjautuminen -> localhost/api/login
loginRouter.post('/', function (req, res) {
  console.log("login")
  const username = req.body.username
  let resultingUser = users.find(user => user.username === username);
  console.log("resulting user: ", resultingUser)

//tähän jokin "jos user = undefined" response.end()?
  bcrypt.compare(req.body.password, resultingUser.password, function(err, result) {
    //send token here
    if (result === true) {
      let token = jwt.sign(req.body.username, "kissa")
      res.json(token)
    }
      //Tänne jokin "jos false niin res.send "väärä salasana" "
    })
    //react sovelluksen pitää tallentaa token localstorageen ja liittää 
    //jatkossa pyytöjen hedereihin - authorization:Bearer token kenttään
  });

module.exports = loginRouter