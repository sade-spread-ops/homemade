

const Sequelize = require('sequelize');

const sequelize = require('../server/database/connection');

const UserMessage = sequelize.define('userMessage', {
  userId: {
    type: Sequelize.INTEGER(11),
    references: { model: 'Users', key: 'id' }
  },
  messageId: {
    type: Sequelize.INTEGER(11),
    references: { model: 'messages', key: 'id' }
  }
  // matchId: {
  //   type: Sequelize.INTEGER(11),

  // }
});

module.exports = {
  UserMessage
};