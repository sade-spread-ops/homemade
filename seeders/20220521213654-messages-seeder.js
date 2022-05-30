'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('messages', [{
      id: 6,
      message: 'heyyy',
      // timeSent: Sequelize.DATE,
      senderId: 101,
      recipientId: 104,
    }, {
      id: 2,
      message: 'hello',
      // timeSent: Sequelize.DATE,
      senderId: 102,
      recipientId: 104,
    }, {
      id: 1,
      message: 'What\'s up?',
      senderId: 103,
      recipientId: 104
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('messages', {}, null);
  }
};