'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const listings = [];
    for (let i = 0; i < 5; i++) {
      listings.push({
      //  id:
      //  userId:
      //  description:
      //  imageURL:
      //  longitude:
      //  latitude:
      //  address:
      //  price:
      });
    }
    return queryInterface.bulkInsert('Users', users);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('listing', {}, null);
  }
};
