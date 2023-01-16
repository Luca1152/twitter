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
        allowNull: true,
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
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tweets');
  }
};
