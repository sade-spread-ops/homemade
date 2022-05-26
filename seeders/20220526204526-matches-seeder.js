'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('matches', [{
      // matchRequestFrom: 
      // matchRequestTo:
      // matchRequestSender: 
      // matchRequestReceiver: 
      // matchRequestStatus: 
    }], {});
  },

  async down (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('matches', {}, null);
  }
};
