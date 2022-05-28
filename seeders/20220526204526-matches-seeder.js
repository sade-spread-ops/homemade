'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('matches', [{
      matchRequestSender: 'foobar0@gmail.com',
      matchRequestReceiver: 'velouriagreen@gmail.com'
    }, {
      matchRequestSender: 'foobar0@gmail.com',
      matchRequestReceiver: 'raymondjjeong@gmail.com'
    }], {});
  },

  async down (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('matches', {}, null);
  }
};
