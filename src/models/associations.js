'use strict';

const {Model} = require('sequelize');

function createAssociations(sequelize, DataTypes) {
  class UserFollowers extends Model {
    static associate(models) {
    }
  }

  UserFollowers.init({
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      followerId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        }
      }
    },
    {sequelize, modelName: 'UserFollowers'});

  return UserFollowers;
}

module.exports = createAssociations;
