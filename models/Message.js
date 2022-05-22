

const Sequelize = require('sequelize');

const sequelize = require('../server/database/connection');

const Message = sequelize.define('Message', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  message: Sequelize.STRING(255),
  timeSent: Sequelize.DATE,
  recipientId: Sequelize.INTEGER(11)
});