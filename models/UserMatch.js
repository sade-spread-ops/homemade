

const Sequelize = require('sequelize');

const sequelize = require('../server/database/connection');

const UserMatch = sequelize.define('UserMatch', {
  userId: {
    type: Sequelize.INTEGER(11),
    references: { model: 'Users', key: 'id' }
  },
  matchId: {
    type: Sequelize.INTEGER(11),
    references: { model: 'matches', key: 'id' }
  }
});