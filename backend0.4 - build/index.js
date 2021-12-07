const app = require('./app')
const https = require('https')
const fs = require('fs')

/**
 * openssl genrsa -out server-key.pem 1024 -days 365 yksityinen avain luodaan tässä
 * openssl req -new -key server-key.pem -out server-csr.pem -days 365  - certificate request luodaan tässä
 * openssl x509 -req -in server-csr.pem -signkey server-key.pem -out server-cert.pem -days 365  - tässä luodaan sertifikaatti csr:n ja yksityisen avaimen avulla (self signed)
 */
//https://www.globalsign.com/en/blog/what-is-a-certificate-signing-request-csr CSR

let options = {
  key: fs.readFileSync( 'cert/server-key.pem', 'utf8'),
  cert: fs.readFileSync( 'cert/server-cert.pem', 'utf8')
}

const PORT = process.env.PORT || 3001
var server = https.createServer(options, app).listen(PORT, function(){
 console.log("Express server listening on port " + PORT);
});
