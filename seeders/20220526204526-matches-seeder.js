'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('matches', [{
      matchRequestSender: 'foobar0@gmail.com',
      matchRequestReceiver: 'foobar1@gmail.com'
    }], {});
  },

  async down (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('matches', {}, null);
  }
};
