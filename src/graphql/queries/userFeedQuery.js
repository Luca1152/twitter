// TODO - get the [n] most recent posts created by users the user with this [id] is following
// TODO - get the [n] most recent liked created by users the user with this [id] is following

const {GraphQLList, GraphQLNonNull, GraphQLString, GraphQLInt} = require("graphql");
const TweetMetadata = require("../types/TweetMetadataType");
const { Op } = require("sequelize");
const models = require("../../models");
const TweetType = require("../types/TweetType");
const User = require("../types/UserType");

const userFeedQuery = {
  type: new GraphQLNonNull(User),
  args: {
    n : {
      type: new GraphQLNonNull(GraphQLInt),
    },
    userId: {
      type: new GraphQLNonNull(GraphQLInt),
    }
  },
  async resolve ( _ , {n , idUser}) {
    //const userData = await models.User.findByPk(idUser);

    const followingIds = await models.UserFollowers.findAll({
        where: {
            followerId : idUser,
        }
    });

    const filteredResults = await models.User.findAll({
        where: {
            id: {
                [Op.in]: followingIds.map(item => item.userId)
            }
        }
    });

    return filteredResults;

    // const tweets = await models.Tweet.findAll({
    //    order: [['likes', 'DESC']],
    //    limit: n,
    //    where : {
    //     author : {[Op.in]: filteredResults.map(item => item.id)}
    //    }
    // })

    // return tweets;
  }

}

module.exports = userFeedQuery;