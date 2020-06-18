const Sequelize = require('sequelize');

const sequelize = new Sequelize('baralho', 'PBaralho', 'urubu100', {
    host: 'localhost',
    dialect: 'mysql'
});
 
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}