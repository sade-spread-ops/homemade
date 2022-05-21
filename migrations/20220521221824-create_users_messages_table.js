'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('user_messages', {
      userId: {
        type: Sequelize.INTEGER(11),
        primaryKey: true
      },
      messageId: {
        type: Sequelize.INTEGER(11),
        primaryKey: true
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('user_messages');
  }
};
