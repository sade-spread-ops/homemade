

const Sequelize = require('sequelize');

const sequelize = require('../server/database/connection');

const User = sequelize.define('User', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  email: Sequelize.STRING(50),
  phone: Sequelize.STRING(11),
  password: Sequelize.STRING(20),
  firstName: Sequelize.STRING(25),
  lastName: Sequelize.STRING(25),
  age: Sequelize.INTEGER(11),
  gender: Sequelize.STRING(20),
  lessee: Sequelize.BOOLEAN,
  lessor: Sequelize.BOOLEAN,
  location: Sequelize.STRING(100),
  imageURL: Sequelize.STRING(255)
});