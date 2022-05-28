'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('messages', {
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
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('messages');
  }
};
