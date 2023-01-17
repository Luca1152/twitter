const {GraphQLObjectType} = require('graphql');
const usersQuery = require("./queries/usersQuery");
const userQuery = require("./queries/userQuery");
const tweetQuery = require("./queries/tweetQuery");
const tweetsQuery = require("./queries/tweetsQuery");
const popularTweetsQuery = require("./queries/popularTweetsQuery");
const userFeedQuery = require("./queries/userFeedQuery");

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: usersQuery,
    user: userQuery,
    tweets: tweetsQuery,
    tweet: tweetQuery,
    popularTweets: popularTweetsQuery,
    userFeed : userFeedQuery,
  }
});

module.exports = QueryType;
