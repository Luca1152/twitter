const {GraphQLNonNull, GraphQLString, GraphQLInt} = require("graphql");
const createTweetResolver = require('../../resolvers/tweet/createTweetResolver');
const TweetType = require("../../types/TweetType");

module.exports = {
  type: TweetType,
  args: {
    text: {
      type: new GraphQLNonNull(GraphQLString),
    },
    likes: {
      type: GraphQLInt,
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