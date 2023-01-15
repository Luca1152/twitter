// TODO
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tweets', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      text: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      likes: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
      isRetweet: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      parentTweetId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tweets',
          key: 'id',
        },
        allowNull: true,
      },
      author: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: false,
      },
      metadataId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'TweetMetadata',
          key: 'id',
        },
        allowNull: true,
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tweets');
  }
};
