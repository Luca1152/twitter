const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLList, GraphQLBoolean} = require("graphql/type");

const TweetType = new GraphQLObjectType({
  name: 'Tweet',
  fields: () => ({
    id: {type: GraphQLInt},
    text: {type: GraphQLString},
    likes: {type: GraphQLInt},
    isRetweet: {
      type: GraphQLBoolean,
      resolve(parent, args) {
        return null; // TODO - if it has no text
      }
    },
    parent: {
      type: TweetType,
      resolve(parent, args) {
        return null; // TODO
      }
    },
    author: {
      type: require("./UserType"),
      resolve(parent, args) {
        return null; // TODO
      }
    },
    replies: {
      type: new GraphQLList(TweetType),
      resolve(parent, args) {
        return null; // TODO
      }
    },
    retweets: {
      type: new GraphQLList(TweetType),
      resolve(parent, args) {
        return null; // TODO
      }
    }
  })
});

module.exports = TweetType;