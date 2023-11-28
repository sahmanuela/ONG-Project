const db = require('./db');
const Pet = db.sequelize.define('pets',{
    nome:{
        type: db.Sequelize.STRING
    }, 
    idade:{
        type: db.Sequelize.STRING
    }, 
    area:{
        type: db.Sequelize.STRING
    }, 
    especie:{
        type: db.Sequelize.STRING
    }, 
    genero:{
        type: db.Sequelize.STRING
    },
    imgpet:{
        type: db.Sequelize.STRING
    }
});

module.exports = Pet;


