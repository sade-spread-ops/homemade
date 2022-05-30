'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('matches', [{
      matchRequestSender: 'velouriagreen@gmail.com',
      matchRequestReceiver: 'raymondjjeong@gmail.com'
    }, {
      matchRequestSender: 'rjreed1@gmail.com',
      matchRequestReceiver: 'raymondjjeong@gmail.com'
    }, {
      matchRequestSender: 'rysmith504@gmail.com',
      matchRequestReceiver: 'raymondjjeong@gmail.com'
    }], {});
  },

  async down (queryInterface, Sequelize) {

    return queryInterface.bulkDelete('matches', {}, null);
  }
};
