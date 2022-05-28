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
  recipientId: Sequelize.INTEGER(11)
});



//Does this connect two foreign keys to the same table? userId and recepientId?