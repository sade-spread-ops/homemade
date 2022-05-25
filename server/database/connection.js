const Sequelize = require('sequelize');

const sequelize = new Sequelize('homemade', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql',
  logging: console.log
});

sequelize.authenticate()
  .then(() => console.log(' 🚀 Database Connected!'))
  .catch((err) => console.log('Error:', err));

module.exports = sequelize;