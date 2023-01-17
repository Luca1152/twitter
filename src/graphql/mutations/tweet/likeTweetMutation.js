const {GraphQLNonNull} = require("graphql");
const likeTweetResolver = require('../../resolvers/tweet/likeTweetResolver');
const {GraphQLBoolean, GraphQLInt} = require("graphql/type");

module.exports = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: likeTweetResolver,
}