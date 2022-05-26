'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('listings', [{
      id: 1,
      userId: 1,
      description: 'Lowes',
      imageURL: 'https://lh5.googleusercontent.com/p/AF1QipMnFuhdJGF1fds7dtqgDW6mHevtiK6jh8JgK_bM=w426-h240-k-no',
      longitude: -90.13098520876858,
      latitude: 29.966469954768932,
      address: '121 Jefferson Hwy, Jefferson, LA 70121',
      price: 1200
    }], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('listings', {}, null);
  }
};
