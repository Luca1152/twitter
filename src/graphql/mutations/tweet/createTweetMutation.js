// TODO
// Limit the number of characters to 280

const {
  GraphQLNonNull,
  GraphQLString
} = require("graphql");

const userType = require("../types/userType");
const createUserResolver = require('../resolvers/createUserResolver');

module.exports = {
  type: userType,
  args: {
    username: {
      type: new GraphQLNonNull(GraphQLString),
    },
    name: {
      type: new GraphQLNonNull(GraphQLString),
    },
    tweets: {
      type: new GraphQLNonNull(GraphQLString),
    },
    id: {type: GraphQLInt},
    username: {type: GraphQLString},
    name: {type: GraphQLString},
    tweets: {
      type: new GraphQLList(tweetType),
      resolve(parent, args) {
        return null;
      }
    },
    following: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return null;
      }
    },
    followers: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return null;
      }
    },
  },
  resolve: createUserResolver,
}