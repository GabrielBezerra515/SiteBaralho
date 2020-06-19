const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'PBaralho',
    password: 'urubu100',
    database: 'baralho'
});

conexao.connect(function(err){
    if(err) throw (err);
});

module.exports = conexao