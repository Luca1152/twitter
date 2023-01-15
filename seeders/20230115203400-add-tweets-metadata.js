'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TweetMetadata', [
      {
        createdAt: new Date(),
        location: "Romania",
        sentFrom: "iOS",
      },
      {
        createdAt: new Date(),
        location: "United States",
        sentFrom: "Android",
      },
      {
        createdAt: new Date(),
        location: "Romania",
        sentFrom: "Android",
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
