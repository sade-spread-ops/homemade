const Sequelize = require('sequelize');

const sequelize = new Sequelize('homemade', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql',
  operatorsAliases: false
});

sequelize.authenticate()
  .then(() => console.log('Connection Worked'))
  .catch((err) => console.log('Error:', err));

module.exports = sequelize;