const Sequelize = require('sequelize');

const sequelize = require('../server/database/connection');

const Message = sequelize.define('message', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  message: Sequelize.STRING(255),
  timeSent: Sequelize.DATE,
  senderId: {
    type: Sequelize.INTEGER(11),
    references: { model: 'users', key: 'id' }
  },
  recipientId: {
    type: Sequelize.INTEGER(11),
    references: { model: 'users', key: 'id' }
  },
});

module.exports = {
  Message
};

//Does this connect two foreign keys to the same table? userId and recepientId?