'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    // const users = [];
    // for (let i = 0; i < 5; i++) {
    //   users.push({
    //     id: 100 + i,
    //     email: `foobar${i}@gmail.com`,
    //     phone: `5049${i}65555`,
    //     firstName: 'Foo',
    //     lastName: `Bar ${i}`,
    //     age: 18 + i,
    //     gender: i % 2 === 0 ? 'Male' : 'Female',
    //     lessee: i % 2 === 0,
    //     lessor: i % 2 !== 0,
    //     imageURL: 'https://store-images.s-microsoft.com/image/apps.13519.14149117951615838.f460ee37-2d01-4c01-9a24-aec372cb34c7.cb14c600-f5e9-4fb3-94e9-6caa704a4f8a'
    //   });
    // }
    return queryInterface.bulkInsert('users', [{
      id: 101,
      email: 'velouriagreen@gmail.com',
      firstName: 'Sam',
      lastName: 'Cabrera',
      age: 49,
      gender: 'Female',
      lessee: false,
      lessor: true,
      imageURL: 'https://ca.slack-edge.com/T02P3HQD6-U01BYVDCZJ9-b9b06931e593-512'
    }, {
      id: 102,
      email: 'rjreed1@gmail.com',
      firstName: 'Royce',
      lastName: 'Reed',
      age: 36,
      gender: 'Male',
      lessee: false,
      lessor: true,
      imageURL: 'https://avatars.githubusercontent.com/u/84692008?v=4'
    }, {
      id: 103,
      email: 'rysmith504@gmail.com',
      firstName: 'Ryan',
      lastName: 'Smith',
      age: 33,
      gender: 'Male',
      lessee: false,
      lessor: true,
      imageURL: 'https://avatars.githubusercontent.com/u/79239737?v=4'
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', {}, null);
  }
};
