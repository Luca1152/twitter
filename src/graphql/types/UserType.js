const {GraphQLObjectType, GraphQLString, GraphQLList} = require("graphql");
const TweetType = require("./TweetType");
const {GraphQLInt} = require("graphql/type");

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type: GraphQLInt},
    username: {type: GraphQLString},
    name: {type: GraphQLString},
    tweets: {
      type: new GraphQLList(TweetType),
      resolve(parent, args) {
        return null; // TODO
      }
    },
    following: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return null; // TODO
      }
    },
    followers: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return null; // TODO
      }
    },
  })
});

module.exports = UserType;