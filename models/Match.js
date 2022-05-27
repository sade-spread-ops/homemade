const Sequelize = require('sequelize');

const sequelize = require('../server/database/connection');

const Match = sequelize.define('Match', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  matchRequestFrom: Sequelize.STRING(255),
  matchRequestTo: Sequelize.STRING(255),
  matchRequestSender: Sequelize.STRING(255),
  matchRequestReceiver: Sequelize.STRING(255),
  matchRequestStatus: Sequelize.INTEGER(11)
});

module.exports = {
  Match
};