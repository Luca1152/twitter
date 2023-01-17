const { GraphQLNonNull, GraphQLString} = require("graphql");

const User = require("../../types/UserType");
const createUserResolver = require('../../resolvers/user/createUserResolver');

module.exports = {
  type: User,
  args: {
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  resolve: createUserResolver,
}