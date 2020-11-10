const express = require('express');
const app = express();
const path = require('path');
const bodyParse = require('body-parser');
const cad = require('./modules/cadusuarios');
const conexao = require('./modules/conexao');
const cont = require('./modules/conxaoCont');
var nodemailer = require('nodemailer');

// configurando o body Parser
// ---------------------------------------------------------------------------------------------
app.use(bodyParse.urlencoded({extended: false}));
app.use(bodyParse.json())
// ---------------------------------------------------------------------------------------------

// Conexão com o email
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'bizasdeck@gmail.com',
        pass: '#Gf51357497806'
    }
});
// --------------------------------------------------------------------------------------------

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

    var mailOptions = {
        from: "Biza's Deck",
        to: req.body.email,
        subject: "Bem-Vindo ao Biza's Deck",
        html: `Olá ${req.body.nome}! <br><br> Ficamos felizes por ter se reunido a nossa equipe. 
        <br>Saiba que sua opinião sempre será ouvida e bem-vinda, <br> pedidos que sinta-se à vontade 
        para nos enviar uma mensagem com sugestões ou elogios.<br><br>
        A equipe Biza's Deck agradece!`
    };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

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

    let nome = req.body.nome
    let senha = req.body.senha


    conexao.query(`SELECT * FROM usuarios where nome = '${nome}' and senha = '${senha}'`, function(err, result, fields){
        if(err){
            console.log('Erro de consulta: ' + err);
            res.redirect('/login')
        }
        else if(result == 0){
            console.log('Dado não existe');
        }
        else 
        {
            console.log(result);
            res.json(nome);
        }
    })
});


app.post('/addMensagem', function(req,res){

    let nomeCont = req.body.nomeCont;
    let emailCont = req.body.emailCont;
    let mensagem = req.body.mensagem;

    var mailOptions = {
        from: "Biza's Deck",
        to: emailCont,
        subject: "Biza's Deck agradece!",
        html: `Obrigado Pela sugestão ${nomeCont}! <br> Agradecemos demais a sua colaboração. <br><br>
        A mensagem que você nos enviou é essa: ${mensagem}. <br><br> Por Favor confira se está correto.<br><br> 
        att.: Biza's Deck`
    };
      
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    cont.create({
        nome: nomeCont,
        email: emailCont,
        mensagem: mensagem
    }).then(function(){
        console.log("mensagem registrada");
        setTimeout(() => {
            res.redirect('/contact.html');
        }, 3000);
    }).catch(function(err){
        console.log("Deu erro: " + err)
    });
})

app.listen(9000)