const Sequelize = require('sequelize');




const sequelize = new Sequelize('ong', 'root', '1896Juju.', {
    host: 'localhost',
    dialect: 'mysql'
});

console.log(sequelize);

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
};