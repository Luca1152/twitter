'use strict';

const {Model} = require('sequelize');

function createUser(sequelize, DataTypes) {
  class User extends Model {
    static associate(models) {
      models.User.belongsToMany(models.User, {through: 'UserFollowers', uniqueKey: 'userId'});
      models.User.belongsToMany(models.User, {through: 'UserFollowers', uniqueKey: 'followerId'});
    }
  }

  User.init({
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {sequelize, modelName: 'User'});

  return User;
}

module.exports = createUser;
