'use strict';

const {Model} = require('sequelize');

function createTweetMetadata(sequelize, DataTypes) {
  class TweetMetadata extends Model {
    static associate(models) {
      models.TweetMetadata.belongsTo(models.Tweet);
    }
  }

  TweetMetadata.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      tweetDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      sentFrom: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {sequelize, modelName: 'TweetMetadata'});

  return TweetMetadata;
}

module.exports = createTweetMetadata;
