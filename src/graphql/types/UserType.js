const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList} = require("graphql");
const TweetType = require("./TweetType");

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type: GraphQLID},
    username: {type: GraphQLString},
    name: {type: GraphQLString},
    tweets: {type: new GraphQLList(TweetType)},
  })
});

module.exports = UserType;