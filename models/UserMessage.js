

const Sequelize = require('sequelize');

const sequelize = require('../server/database/connection');

const UserMessage = sequelize.define('UserMessage', {
  userId: {
    type: Sequelize.INTEGER(11),
    primaryKey: true
  },
  messageId: {
    type: Sequelize.INTEGER(11),
    primaryKey: true
  }
});