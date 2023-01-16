'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TweetMetadata', [
      {
        tweetDate: new Date(),
        location: "Romania",
        sentFrom: "iOS",
      },
      {
        tweetDate: new Date(),
        location: "United States",
        sentFrom: "Android",
      },
      {
        tweetDate: new Date(),
        location: "Romania",
        sentFrom: "Android",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
