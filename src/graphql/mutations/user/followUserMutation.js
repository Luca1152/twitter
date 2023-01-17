const {GraphQLNonNull, GraphQLBoolean, GraphQLInt} = require("graphql");
const followUserResolver = require('../../resolvers/user/followUserResolver');

module.exports = {
  type: GraphQLBoolean,
  args: {
    userId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    followerId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: followUserResolver,
}