const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLBoolean} = require("graphql/type");
const { Op } = require("sequelize");
const models = require("../../models");

const TweetType = new GraphQLObjectType({
  name: 'Tweet',
  fields: () => ({
    id: {type: GraphQLInt},
    text: {type: GraphQLString},
    likes: {type: GraphQLInt},
    isRetweet: {
      type: GraphQLBoolean,
      resolve(p, args) {
        return (p.parentTweetId != null && p.text == null);
      }
    },
    parent: {
      type: TweetType,
      resolve(parent, args) {
        return models.Tweet.findOne({where: {id: parent.parentTweetId}});
      }
    },
    author: {
      type: require("./UserType"),
      resolve(parent, args) {
        return models.User.findOne({where: {id: parent.author}});
      }
    },
    replies: {
      type: new GraphQLList(TweetType),
      resolve(p, args) {
        return models.Tweet.findAll({where: {parentTweetId: p.id, text: {[Op.not]: null},}});
      }
    },
    retweets: {
      type: new GraphQLList(TweetType),
      resolve(p, args) {
        return models.Tweet.findAll({where: {parentTweetId: p.id, text: null}});
      }
    }
  })
});

module.exports = TweetType;