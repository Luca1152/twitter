'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('UserFollowers', [
      {
        userId: 1,
        followerId: 2,
      },
      {
        userId: 1,
        followerId: 3,
      },
      {
        userId: 2,
        followerId: 1,
      },
      {
        userId: 2,
        followerId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
  }
};
