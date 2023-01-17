'use strict';

const {Model} = require('sequelize');

function createUser(sequelize, DataTypes) {
  class User extends Model {
    static associate(models) {
      models.User.belongsToMany(models.User, {as: 'userId', through: 'UserFollowers'});
      models.User.belongsToMany(models.User, {as: 'followerId', through: 'UserFollowers'});
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
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'USER'
      },
    },
    {sequelize, modelName: 'User'});

  return User;
}

module.exports = createUser;
