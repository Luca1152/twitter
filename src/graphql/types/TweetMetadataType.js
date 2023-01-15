const {GraphQLString, GraphQLObjectType, GraphQLInt} = require("graphql/type");
const TweetType = require("./TweetType");

const TweetMetadataType = new GraphQLObjectType({
  name: 'TweetMetadata',
  fields: () => ({
    tweet: {
      type: TweetType,
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