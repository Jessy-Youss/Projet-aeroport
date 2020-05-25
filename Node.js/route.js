var express = require('express');
const mysql = require('../Node.js/BDD')
var app = express();
bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//activation du cors:Le partage des ressources entre origines multiples (CORS, Cross Origin Resource Sharing) est un mécanisme permettant les interactions entre des ressources d'origines différentes, ce qui est normalement interdit afin d'empêcher tout comportement malveillant.
var cors = require('cors')
app.use(cors())

app.get('/verif_billet', function(req, res, next) {
   var a = req.query.billet
  mysql.query('SELECT * FROM billet WHERE numero_billet = '+a,(req,row)=>{
  res.send(row)
})
  })

  app.get('/recup_billet', function(req, res, next) {
    var a = req.query.billet
   mysql.query('SELECT utilisateur.nom,utilisateur.prenom, utilisateur.sexe, utilisateur.date_de_naissance, utilisateur.adresse_mail,utilisateur.adresse,utilisateur.telephone, billet.numero_billet, bagage_soute.nombre_bagage from utilisateur,billet, bagage_soute,reservation_vol WHERE  reservation_vol.Id_utlisateur = utilisateur.id_client AND billet.numero_billet ='+a,(req,row)=>{
   res.send(row)
  })
})

 app.get('/montant',function(req,res,next){
  var a = req.query.carte
  mysql.query('SELECT * FROM carte_payement WHERE numero_carte = ' + a,(req, row)=>{
     res.send(row)
     }) 

})


app.post('/new_solde',function(req,res,next){
  var num_carte = req.body.num_carte
  var new_solde = req.body.new_solde
  console.log(new_solde + ""+num_carte)
  mysql.query('UPDATE carte_payement SET montant = ' + new_solde + ' WHERE numero_carte = ' + num_carte,(req, row)=>{
     res.send(row)
     }) 

})
 

app.listen(8080)