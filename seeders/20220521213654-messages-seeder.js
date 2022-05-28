'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('messages', [{
      id: 6,
      message: 'heyyy',
      // timeSent: Sequelize.DATE,
      senderId: 101,
      recipientId: 105,
    }, {
      id: 2,
      message: 'hello',
      // timeSent: Sequelize.DATE,
      senderId: 103,
      recipientId: 105,
    }, {
      id: 1,
      message: 'What\'s up?',
      senderId: 104,
      recipientId: 105
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('messages', {}, null);
  }
};