const {GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList, GraphQLBoolean} = require("graphql/type");
const UserType = require("./UserType");

const TweetType = new GraphQLObjectType({
  name: 'Tweet',
  fields: () => ({
    id: {type: GraphQLID},
    text: {type: GraphQLString},
    likes: {type: GraphQLInt},
    isRetweet: {type: GraphQLBoolean},
    parent: {
      type: TweetType,
      resolve(parent, args) {
        return null; // TODO
      }
    },
    author: {
      type: UserType,
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