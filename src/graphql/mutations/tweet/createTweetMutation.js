// TODO
// Limit the number of characters to 280

//TOCHECK

const {
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require("graphql");

const Tweet = require("../../types/TweetType");
const TweetModule = require('../../../models/Tweet')
const User = require("../../types/UserType");

const createTweetResolver = require('../../resolvers/tweet/createTweetResolver');

module.exports = {
  type: TweetModule,
  args: {
    text: {
      type: new GraphQLNonNull(GraphQLString),
    },
    likes: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    parentTweetId: {
      type: GraphQLInt,
    },
    author: {
      type: new GraphQLNonNull(GraphQLInt),
    }
  },
  resolve: createTweetResolver,
}