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
        lessor: i % 2 !== 0,
        imageURL: 'https://store-images.s-microsoft.com/image/apps.13519.14149117951615838.f460ee37-2d01-4c01-9a24-aec372cb34c7.cb14c600-f5e9-4fb3-94e9-6caa704a4f8a'
      });
    }
    return queryInterface.bulkInsert('Users', users);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', {}, null);
  }
};
