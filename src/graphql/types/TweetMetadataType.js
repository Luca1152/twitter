const {GraphQLString, GraphQLObjectType, GraphQLInt} = require("graphql/type");

const TweetMetadataType = new GraphQLObjectType({
  name: 'TweetMetadata',
  fields: () => ({
    tweet: {
      type: require("./TweetType"),
      resolve(parent, args) {
        return null; // TODO
      }
    },
    createdAt: {type: GraphQLString},
    location: {type: GraphQLString},
    sentFrom: {type: GraphQLString},
  })
});

module.exports = TweetMetadataType;