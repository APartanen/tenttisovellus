const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const registerRouter = require('express').Router()
const testData = require('../Utils/testData')
let tentit = testData.tentit
let users = testData.users

//register -> localhost/api/register
registerRouter.post('/', function (req, res) {
  console.log("Tallennetaan käyttäjä, salasana: ")
  let username = req.body.username
  let result = users.find(user => user.username === username);
  console.log("register find result", result)
  console.log("users", users)

  if (result === undefined) {
    bcrypt.hash(req.body.password, 10, function(err, hash) {
      users.push({username:req.body.username, password:hash})
  });      
    res.end("User added")
  } else {
    //https://stackoverflow.com/questions/12657493/what-http-error-code-to-return-for-name-already-taken
    res.end("Username is already taken");
  }
  //Varmista, että käyttäjätunnus ei ole vielä käytössä
  /*nämä laitetaan tietokantaan
  req.body.username
  req.body.password - salataan bcyptillä ennen kuin tallennetaan
  */
});

module.exports = registerRouter