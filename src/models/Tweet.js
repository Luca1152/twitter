'use strict';

const {Model} = require('sequelize');

function createTweet(sequelize, DataTypes) {
  class Tweet extends Model {
    static associate(models) {
      // Tweet has parent tweet
      models.Tweet.hasOne(models.Tweet, {
        as: 'parentTweet',
        foreignKey: 'parentTweetId',
      });
      models.Tweet.hasOne(models.TweetMetadata, {
        foreignKey: 'tweetId',
        sourceKey: 'id'
      });
    }
  }

  Tweet.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      text: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      likes: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      parentTweetId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Tweets',
          key: 'id',
        },
        allowNull: true,
      },
      author: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
        allowNull: false,
      }
    },
    {sequelize, modelName: 'Tweet'});

  return Tweet;
}

module.exports = createTweet;
