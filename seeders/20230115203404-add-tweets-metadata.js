'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TweetMetadata', [
      {
        tweetId: 1,
        tweetDate: new Date(),
        location: "Romania",
        sentFrom: "iOS",
      },
      {
        tweetId: 2,
        tweetDate: new Date(),
        location: "United States",
        sentFrom: "Android",
      },
      {
        tweetId: 3,
        tweetDate: new Date(),
        location: "Romania",
        sentFrom: "Android",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
  }
};
