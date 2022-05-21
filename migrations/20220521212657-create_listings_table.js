'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('listings', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      userId: Sequelize.INTEGER(11),
      description: Sequelize.STRING(500),
      imageURL: Sequelize.STRING(255),
      longitude: Sequelize.FLOAT,
      latitude: Sequelize.FLOAT,
      address: Sequelize.STRING(255),
      price: Sequelize.FLOAT,
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('listings');
  }
};
