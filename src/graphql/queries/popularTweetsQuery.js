const {GraphQLList, GraphQLNonNull, GraphQLString, GraphQLInt} = require("graphql");
const {Op} = require("sequelize");
const models = require("../../models");
const TweetType = require("../types/TweetType");

// Get the most liked [n] tweets that have been posted from a specific location [loc].
const popularTweetsQuery = {
  type: new GraphQLList(TweetType),
  args: {
    location: {
      type: new GraphQLNonNull(GraphQLString),
    },
    n: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  async resolve(_, {n, location}) {
    const tweetMetadatas = await models.TweetMetadata.findAll({
      where: {location: location}
    });
    return await models.Tweet.findAll({
      order: [['likes', 'DESC']],
      limit: n,
      where: {
        id: {[Op.in]: tweetMetadatas.map(item => item.tweetId)}
      }
    });
  }
}

module.exports = popularTweetsQuery;