const {GraphQLString, GraphQLObjectType, GraphQLInt} = require("graphql/type");
const models = require("../../models");

const TweetMetadataType = new GraphQLObjectType({
  name: 'TweetMetadata',
  fields: () => ({
    tweet: {
      type: require("./TweetType"),
      resolve(parent, args) {
        return models.Tweet.findOne({where: {id: parent.tweetId}});
      }
    },
    tweetDate: {type: GraphQLString},
    location: {type: GraphQLString},
    sentFrom: {type: GraphQLString},
  })
});

module.exports = TweetMetadataType;