// Get the most liked [n] tweets that have been posted from a specific location [loc].

const {GraphQLList, GraphQLNonNull, GraphQLString, GraphQLInt} = require("graphql");
const TweetMetadata = require("../types/TweetMetadataType");
const { Op } = require("sequelize");
const models = require("../../models");
const tweetType = require("../types/TweetType");

const popularTweetsQuery = {
  type: new GraphQLList(tweetType),
  args: {
    n : {
        type: new GraphQLNonNull(GraphQLInt),
    },
    loc: {
      type: new GraphQLNonNull(GraphQLString),
    }
  },
  async resolve ( _ , {n , loc}) {
    const tweetMetadatas = await models.TweetMetadata.findAll({where: {location : loc}});

    const filteredResults = await models.Tweet.findAll({
        order: [['likes', 'DESC']],
        limit: n,
        where : {
            id : {[Op.in]: tweetMetadatas.map(item => item.tweetId)}
        }
    });

    return filteredResults;
    
  }

}

module.exports = popularTweetsQuery;