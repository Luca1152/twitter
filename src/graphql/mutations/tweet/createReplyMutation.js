const {GraphQLNonNull, GraphQLString, GraphQLInt} = require("graphql");
const createReplyResolver = require('../../resolvers/tweet/createReplyResolver');
const TweetType = require("../../types/TweetType");

module.exports = {
  type: TweetType,
  args: {
    author: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    text: {
      type: new GraphQLNonNull(GraphQLString),
    },
    parentTweetId: {
      type: GraphQLInt,
    },
  },
  resolve: createReplyResolver,
}