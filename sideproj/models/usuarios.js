const db = require('./db');
const usuario = db.sequelize.define('usuarios',{
    nome:{
        type: db.Sequelize.STRING
    }, 
    email:{
        type: db.Sequelize.STRING
    },
    senha: {
        type: db.Sequelize.STRING
    }
});

module.exports = usuario;
