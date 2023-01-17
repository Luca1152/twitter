const {GraphQLObjectType, GraphQLString, GraphQLList} = require("graphql");
const {Op} = require("sequelize");
const {GraphQLInt} = require("graphql/type");

const tweetType = require("./TweetType");
const models = require("../../models");

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {type: GraphQLInt},
    username: {type: GraphQLString},
    name: {type: GraphQLString},
    tweets: {
      type: new GraphQLList(tweetType),
      resolve(parent, args) {
        return models.Tweet.findAll({where: {author: parent.id}});
      }
    },
    following: {
      type: new GraphQLList(UserType),
      async resolve(parent, args) {

        const followingIds = await models.UserFollowers.findAll({
          where: {
            followerId: parent.id
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
    },
    followers: {
      type: new GraphQLList(UserType),
      async resolve(parent, args) {
        const followersIds = await models.UserFollowers.findAll({
          where: {
            userId: parent.id
          }
        });

        return await models.User.findAll({
          where: {
            id: {
              [Op.in]: followersIds.map(item => item.followerId)
            }
          }
        });
      }
    },
  })
});

module.exports = UserType;