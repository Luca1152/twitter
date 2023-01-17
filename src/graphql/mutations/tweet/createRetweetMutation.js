const {GraphQLNonNull, GraphQLInt} = require("graphql");
const createRetweetResolver = require('../../resolvers/tweet/createRetweetResolver');
const TweetType = require("../../types/TweetType");

module.exports = {
  type: TweetType,
  args: {
    author: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    parentTweetId: {
      type: GraphQLInt,
    },
  },
  resolve: createRetweetResolver,
}