'use strict';

const Sequelize = require('sequelize');
const process = require('process');
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const createUser = require('./User');
const createTweetMetadata = require('./TweetMetadata');
const createTweet = require('./Tweet');
const createAssociations = require('./associations');

const db = {};
const sequelize = new Sequelize(config.database, config.username, config.password, config);

// Create the models
const modelCreators = [
  createUser, createTweetMetadata, createTweet, createAssociations
]
modelCreators.forEach(modelCreator => {
  const model = modelCreator(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
});

// Create associations
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;