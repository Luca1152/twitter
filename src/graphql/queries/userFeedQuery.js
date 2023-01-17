// TODO - get the [n] most recent liked created by users the user with this [id] is following

const {GraphQLNonNull, GraphQLInt} = require("graphql");
const {Op} = require("sequelize");
const models = require("../../models");
const User = require("../types/UserType");

const userFeedQuery = {
  type: new GraphQLNonNull(User),
  args: {
    n: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    userId: {
      type: new GraphQLNonNull(GraphQLInt),
    }
  },
  async resolve(_, {n, idUser}) {
    const followingIds = await models.UserFollowers.findAll({
      where: {
        followerId: idUser,
      }
    });

    return await models.User.findAll({
      where: {
        id: {
          [Op.in]: followingIds.map(item => item.userId)
        }
      }
    });
  }
}

module.exports = userFeedQuery;