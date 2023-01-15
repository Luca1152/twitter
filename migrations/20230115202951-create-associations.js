// TODO
'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('UserTweets', {
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: false,
      },
      tweetId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Tweets',
          key: 'id',
        },
        allowNull: false,
      }
    });
    await queryInterface.createTable('UserFollowers', {
        userId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id',
          },
        },
        followerId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Users',
            key: 'id'
          }
        }
      }
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('UserFollowers');
  }
}
;
