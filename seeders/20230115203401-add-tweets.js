'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tweets', [
      {
        text: 'Primul tweet de pe Twitter!',
        likes: 200,
        parentTweetId: null,
        author: 1,
      },
      {
        text: 'Si asta e primul reply de pe Twitter!',
        likes: 10,
        parentTweetId: 1,
        author: 2,
      },
      {
        // Retweet:
        parentTweetId: 2,
        author: 1,
      },
      {
        text: 'Alt tweet din Romania',
        likes: 250,
        parentTweetId: null,
        author: 3,
      },
      {
        text: 'Al treilea tweet al lui @luca',
        likes: 10,
        parentTweetId: 2,
        author: 1,
      },
      {
        text: 'Al patrulea tweet al lui @luca',
        likes: 20,
        parentTweetId: null,
        author: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
  }
};
