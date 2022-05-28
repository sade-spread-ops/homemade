'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('user_matches', {
      userId: {
        type: Sequelize.INTEGER(11),
        references: { model: 'users', key: 'id' }
      },
      matchId: {
        type: Sequelize.INTEGER(11),
        references: { model: 'matches', key: 'id' }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('user_matches');
  }
};
