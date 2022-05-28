'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('messages', [{
      id: 6,
      message: 'heyyy',
      // timeSent: Sequelize.DATE,
<<<<<<< HEAD
      senderId: 101,
      recipientId: 105,
=======
      senderId: 3,
      recipientId: 6,
>>>>>>> 1cfccbec6234317c069f489cbc462d937efee321
    }, {
      id: 2,
      message: 'hello',
      // timeSent: Sequelize.DATE,
<<<<<<< HEAD
      senderId: 103,
      recipientId: 105,
=======
      senderId: 4,
      recipientId: 6,
>>>>>>> 1cfccbec6234317c069f489cbc462d937efee321
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