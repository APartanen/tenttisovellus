const bcrypt = require('bcrypt')

let users = [
]

bcrypt.hash("asd", 10, function(err, hash) {
  users.push({username:"asd", password:hash})
});

let tentit =  [
  {
    tenttiNimi: "testiTenttibackendistä",
    sisältö: [
      [
        {
            pääkysymys: "testiTentti",
            oikeaVastaus: 1,
            id: 0,
            vastausVaihtoehdot: [
              {
                vastaus: "ei",
                booleanArvoVastaukselle: false,
                komponentinId: 0
              },
              {
                vastaus: "kyllä",
                booleanArvoVastaukselle: false,
                komponentinId: 1
              },
              {
                vastaus: "ehkä",
                booleanArvoVastaukselle: false,
                komponentinId: 2
              }
            ]
          }
        ],
        [
          {
            pääkysymys: "Onko JavaScript kivaa?",
            oikeaVastaus: 1,
            id: 0,
            vastausVaihtoehdot: [
              {
                vastaus: "ei",
                booleanArvoVastaukselle: false,
                komponentinId: 0
              },
              {
                vastaus: "kyllä",
                booleanArvoVastaukselle: false,
                komponentinId: 1
              },
              {
                vastaus: "ehkä",
                booleanArvoVastaukselle: false,
                komponentinId: 2
              }
            ]
          }
        ],
        [
          {
            pääkysymys: "Onko JavaScript kivaa?",
            oikeaVastaus: 1,
            id: 0,
            vastausVaihtoehdot: [
              {
                vastaus: "ei",
                booleanArvoVastaukselle: false,
                komponentinId: 0
              },
              {
                vastaus: "kyllä",
                booleanArvoVastaukselle: false,
                komponentinId: 1
              },
              {
                vastaus: "ehkä",
                booleanArvoVastaukselle: false,
                komponentinId: 2
              }
            ]
          }
        ]
      ],
      id: 1
    },
    {
      tenttiNimi: "testiTenttibackendistä2",
      sisältö: [
        [
          {
            pääkysymys: "testiTentti",
            oikeaVastaus: 1,
            id: 0,
            vastausVaihtoehdot: [
              {
                vastaus: "ei",
                booleanArvoVastaukselle: false,
                komponentinId: 0
              },
              {
                vastaus: "kyllä",
                booleanArvoVastaukselle: false,
                komponentinId: 1
              },
              {
                vastaus: "ehkä",
                booleanArvoVastaukselle: false,
                komponentinId: 2
              }
            ]
          }
        ],
        [
          {
            pääkysymys: "Onko JavaScript kivaa?",
            oikeaVastaus: 1,
            id: 0,
            vastausVaihtoehdot: [
              {
                vastaus: "ei",
                booleanArvoVastaukselle: false,
                komponentinId: 0
              },
              {
                vastaus: "kyllä",
                booleanArvoVastaukselle: false,
                komponentinId: 1
              },
              {
                vastaus: "ehkä",
                booleanArvoVastaukselle: false,
                komponentinId: 2
              }
            ]
          }
        ],
        [
          {
            pääkysymys: "Onko JavaScript kivaa?",
            oikeaVastaus: 1,
            id: 0,
            vastausVaihtoehdot: [
              {
                vastaus: "ei",
                booleanArvoVastaukselle: false,
                komponentinId: 0
              },
              {
                vastaus: "kyllä",
                booleanArvoVastaukselle: false,
                komponentinId: 1
              },
              {
                vastaus: "ehkä",
                booleanArvoVastaukselle: false,
                komponentinId: 2
              }
            ]
          }
        ]
      ],
      id: 2
    }
  ]
  
  module.exports = { tentit, users }