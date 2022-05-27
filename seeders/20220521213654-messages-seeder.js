'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('messages', [{
      id: 6,
      message: 'heyyy',
      timeSent: Sequelize.DATE,
      senderId: 3,
      recipientId: 6,
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('messages', {}, null);
  }
};