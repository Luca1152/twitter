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
        metadataId: 1,
      },
      {
        text: 'Si asta e primul reply de pe Twitter!',
        likes: 10,
        parentTweetId: 1,
        author: 2,
        metadataId: 2,
      },
      {
        // Retweet:
        parentTweetId: 2,
        author: 1,
        metadataId: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
  }
};
