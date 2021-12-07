const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken')

app.use(express.json())

//const logger = require('./utils/logger')
const middleware = require('./Utils/middleware')
//importtaa middlewaressa olevan morg objektin, millä ominaisuutena morgan, express.json() pitää olla ylempänä kuin tämä
app.use(middleware.morg.morgan)
app.use(cors())
app.use(express.static('./public/build'))

const checkToken = (req,res,next) => {
  console.log("token")
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, "kissa", (err, user) => {
  console.log(err)
    
  if (err) return res.sendStatus(403)

  req.user = user
  console.log(user)
  next()
  })
}

const loginRouter = require('./Controllers/loginController')
const registerRouter = require('./Controllers/registerController')
const apiRouter = require('./Controllers/apiController')

//tämä järjestys tärkeä niin checktoken ei estä kirjautumista tai rekisteröintiä
app.use('/api/login', loginRouter)
app.use('/api/register', registerRouter)
app.use(checkToken)
app.use('/api', apiRouter)
app.use(middleware.fn.fn1)

module.exports = app