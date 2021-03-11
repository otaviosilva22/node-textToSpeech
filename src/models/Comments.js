const {sequelize, Sequelize} = require('../database/dbconfig');

//modelo da tabela comments
var CommentsDescriptions = sequelize.define('descriptions', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

//export
module.exports = CommentsDescriptions;