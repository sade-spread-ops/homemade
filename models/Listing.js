const Sequelize = require('sequelize');

const sequelize = require('../server/database/connection');

const Listing = sequelize.define('listing', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: Sequelize.INTEGER(11),
    references: { model: 'Users', key: 'id' }
  },
  description: Sequelize.STRING(500),
  imageURL: Sequelize.STRING(255),
  longitude: Sequelize.FLOAT,
  latitude: Sequelize.FLOAT,
  address: Sequelize.STRING(255),
  price: Sequelize.FLOAT
});

module.exports = Listing;
