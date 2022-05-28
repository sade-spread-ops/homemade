'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('listings', [{
      // userId: 6,
      description: 'Lowes',
      imageURL: 'https://lh5.googleusercontent.com/p/AF1QipMnFuhdJGF1fds7dtqgDW6mHevtiK6jh8JgK_bM=w426-h240-k-no',
      longitude: -90.13098520876858,
      latitude: 29.966469954768932,
      address: '121 Jefferson Hwy, Jefferson, LA 70121',
      price: 1200
    }, {
      description: 'The SuperDome',
      imageURL: 'https://static.clubs.nfl.com/image/private/t_new_photo_album/f_auto/saints/lploi6us754b4askdeqj.jpg',
      longitude: -90.08124,
      latitude: 29.95106,
      address: '1500 Sugar Bowl Dr New Orleans LA 70112',
      price: 138000000
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('listings', {}, null);
  }
};
