const db = require('./db');
const voluntario = db.sequelize.define('voluntarios',{
    nome:{
        type: db.Sequelize.STRING
    }, 
    email:{
        type: db.Sequelize.STRING
    },
    numero:{
        type: db.Sequelize.STRING
    }
});

module.exports = voluntario;
