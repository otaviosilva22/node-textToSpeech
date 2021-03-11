const Sequelize = require('sequelize');
const sequelize = new Sequelize('comments', 'root', '', {dialect: 'mysql', host: 'localhost'});

//verifica conexão
var conn = sequelize.authenticate()
    .then(()=>{
        console.log('Connection established!');
    })
    .catch(()=>{
        console.log('Connection fail!');
    })

var db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
