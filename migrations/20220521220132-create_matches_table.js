'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('matches', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      matchRequestFrom: Sequelize.STRING(255),
      matchRequestTo: Sequelize.STRING(255),
      matchRequestSender: Sequelize.STRING(255),
      matchRequestReceiver: Sequelize.STRING(255),
      matchRequestStatus: Sequelize.INTEGER(11),
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('matches');
  }
};
