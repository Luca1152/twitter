const {GraphQLString, GraphQLObjectType, GraphQLInt} = require("graphql/type");

const TweetMetadataType = new GraphQLObjectType({
  name: 'TweetMetadata',
  fields: () => ({
    tweet: {
      type: require("./TweetType"),
      resolve(parent, args) {
        // TO DO with tweetId / id
        return models.Tweet.findOne({where: {id: parent.id}})
      }
    },
    tweetDate: {type: GraphQLString},
    location: {type: GraphQLString},
    sentFrom: {type: GraphQLString},
  })
});

module.exports = TweetMetadataType;