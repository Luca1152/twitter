const {GraphQLBoolean, GraphQLNonNull, GraphQLInt} = require("graphql");
const deleteUserResolver = require('../../resolvers/user/deleteUserResolver');

module.exports = {
  type: GraphQLBoolean,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  resolve: deleteUserResolver,
}