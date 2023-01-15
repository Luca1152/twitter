const {GraphQLString, GraphQLObjectType} = require("graphql/type");

const TweetMetadataType = new GraphQLObjectType({
  name: 'TweetMetadata',
  fields: () => ({
    createdAt: {type: GraphQLString},
    location: {type: GraphQLString},
  })
});

module.exports = TweetMetadataType;