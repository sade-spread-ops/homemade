'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const users = [];
    for (let i = 0; i < 5; i++) {
      users.push({
        id: i,
        email: `foobar${i}@gmail.com`,
        phone: `5049${i}65555`,
        firstName: 'Foo',
        lastName: 'Bar',
        age: 18 + i,
        gender: i % 2 === 0 ? 'Male' : 'Female',
        lessee: i % 2 === 0,
        lessor: i % 2 !== 0
      });
    }
    return queryInterface.bulkInsert('users', users);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', {}, null);
  }
};
