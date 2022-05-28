

const Sequelize = require('sequelize');

const sequelize = require('../server/database/connection');

const UserMatch = sequelize.define('userMatch', {
  userId: {
    type: Sequelize.INTEGER(11),
    references: { model: 'users', key: 'id' }
  },
  matchId: {
    type: Sequelize.INTEGER(11),
    references: { model: 'matches', key: 'id' }
  }
});