'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TweetMetadata', [
      {
        tweetId: 1,
        tweetDate: new Date("2023-01-16"),
        location: "Romania",
        sentFrom: "iOS",
      },
      {
        tweetId: 2,
        tweetDate: new Date("2023-01-17"),
        location: "United States",
        sentFrom: "Android",
      },
      {
        tweetId: 3,
        tweetDate: new Date("2023-01-18"),
        location: "Romania",
        sentFrom: "Android",
      },
      {
        tweetId: 4,
        tweetDate: new Date("2022-01-16"),
        location: "Romania",
        sentFrom: "iOS",
      },
      {
        tweetId: 5,
        tweetDate: new Date("2021-01-16"),
        location: "Romania",
        sentFrom: "iOS",
      },
      {
        tweetId: 6,
        tweetDate: new Date("2022-01-16"),
        location: "Romania",
        sentFrom: "iOS",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
  }
};
