const {GraphQLList} = require("graphql");
const TweetType = require("../types/TweetType");
const models = require("../../models");

const tweetsQuery = {
  type: new GraphQLList(TweetType),
  resolve(parent, args) {
    return models.Tweet.findAll();
  }
}

module.exports = tweetsQuery;