'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('messages', [{
<<<<<<< HEAD
      // userId: 6,
      // description: 'Lowes',
      // imageURL: 'https://lh5.googleusercontent.com/p/AF1QipMnFuhdJGF1fds7dtqgDW6mHevtiK6jh8JgK_bM=w426-h240-k-no',
      // longitude: -90.13098520876858,
      // latitude: 29.966469954768932,
      // address: '121 Jefferson Hwy, Jefferson, LA 70121',
      // price: 1200
    }], {});
=======
      id: 6,
      message: 'heyyy',
      // timeSent: Sequelize.DATE,
      senderId: 3,
      recipientId: 6,
    
    
    }, {
      id: 2,
      message: 'hello',
      // timeSent: Sequelize.DATE,
      senderId: 4,
      recipientId: 6,
<<<<<<< HEAD
    }, {
      id: 1,
      message: 'What\'s up?',
      senderId: 5,
      recipientId: 6
    }], {});
=======
    }
  
    ], {});
>>>>>>> 9aad788ad5fdf5955e4a189b176e34872cc53bc8
>>>>>>> 9bf0a5f7cbcfaa9f1e38ca9d4018383e109f62aa
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('messages', {}, null);
  }
};