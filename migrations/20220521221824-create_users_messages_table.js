'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('user_messages', {
      userId: {
        type: Sequelize.INTEGER(11),
        references: { model: 'users', key: 'id' }
      },
      messageId: {
        type: Sequelize.INTEGER(11),
        references: { model: 'messages', key: 'id' }
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('user_messages');
  }
};
