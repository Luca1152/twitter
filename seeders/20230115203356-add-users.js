'use strict';
const bcrypt = require('bcryptjs');
const SALT_ROUNDS = 8;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'luca1152',
        name: "Luca",
        password: await bcrypt.hash('admin123', SALT_ROUNDS),
        role: 'ADMIN'
      },
      {
        username: 'ioana',
        name: "Ioana",
        password: await bcrypt.hash('admin123', SALT_ROUNDS),
        role: 'ADMIN'
      },
      {
        username: 'anonymous',
        name: "I have no name",
        password: await bcrypt.hash('user123', SALT_ROUNDS),
        role: 'USER'
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
  }
};
