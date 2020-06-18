const express = require('express');
const app = express();
const path = require('path');
const bodyParse = require('body-parser');
const cad = require('./modules/cadusuarios');

// configurando o body Parser
// ---------------------------------------------------------------------------------------------
app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json())
// ---------------------------------------------------------------------------------------------


app.use(express.static('public'));

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, './public', 'index.html'));
});

app.get('/login', function (req,res){
    res.sendFile(path.join(__dirname, './public', 'login.html'));
});

app.get('/jogos', function (req,res){
    res.sendFile(path.join(__dirname, './public', 'jogos.html'));
});

app.post('/addUser', function(req, res){
    cad.create({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    }).then(function(){
        res.redirect('/login')
    }).catch(function(err){
        console.log("Erro ao cadastrar Usuario" + err)
    });
});

app.post('/verLogin', function(req,res){
    cad.findAll({
        where: {
          nome: req.body.emailLogin,
          senha: req.body.senhaLogin
        }
      }).then(function(){
          res.redirect('/jogos')
      }).catch(function(err){
        console.log("Deu erro!" + err)
      })
})

app.listen(9000)