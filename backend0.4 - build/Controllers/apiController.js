
const apiRouter = require('express').Router()
const testData = require('../Utils/testData')
let tentit = testData.tentit
let users = testData.users

apiRouter.get('/', function (req, res) {
    res.writeHead(200);
    res.end("hello world\n");
});

//GET kaikki tentit 
apiRouter.get('/tentit', (req, res) => {
    res.json(tentit)
}) 

//POST tentti - lisää 1 tentti tentit array - testattu postmanilla - toimi silloin
//Tämä lähetetään tietokantaan, josta tulee autoincrement id kenttä ja se liitetään tentti kohtaan
apiRouter.post('/tentit', (request, response) => {
  //-> aseta tentti = request.body - tarkista missä muodossa käsitellään frontissa
  const tentti = request.body
  tentit = tentit.concat(tentti)
  response.json(tentti)
})

//Hae tentti ID perusteella - testattu postmanilla - huom hae id 1, koska testitentin id on 1
apiRouter.get('/tentit/:id', (request, response) => {
  const id = Number(request.params.id);
  const tentti = tentit.find(tentti => tentti.id === id);

  if (tentti) {    
    response.json(tentti);
  } else {    
    response.status(404).end();
  }
})

//put - millaista tiedon etsimistä käytetään azuressa? 
//etsi tietokannasta tentti id mukaan ja tallenna sen uusi muoto


//poista tentti id perusteella - http://localhost:3001/api/tentit/1
//-> ei tällä hetkellä luo tenteille id arvoja, joten poisto ei toimi niillä, jotka lisätään - tentti 0 toimii
apiRouter.delete('/tentit/:id', (req,res) => {
  let delID =  Number(req.params.id);
  tentit = tentit.filter(tentti => tentti.id !== delID)
  res.status(204).end()
}); 

module.exports = apiRouter