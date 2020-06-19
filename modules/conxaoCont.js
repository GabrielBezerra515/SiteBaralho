const db = require('./db');

const mensagemCont = db.sequelize.define('mensagens', {
    nome: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    mensagem: {
        type: db.Sequelize.STRING
    }
});

// mensagemCont.sync({
//         force: true
//     });

module.exports = mensagemCont;




