// Get the most liked [n] tweets that have been posted from a specific location [loc].

const {GraphQLList, GraphQLNonNull, GraphQLString, GraphQLInt} = require("graphql");
const {Op} = require("sequelize");
const models = require("../../models");
const TweetType = require("../types/TweetType");

const popularTweetsQuery = {
  type: new GraphQLList(TweetType),
  args: {
    n: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    loc: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  async resolve(_, {n, loc}) {
    const tweetMetadatas = await models.TweetMetadata.findAll({
      where: {location: loc}
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