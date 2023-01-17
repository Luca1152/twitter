const {GraphQLInt, GraphQLNonNull} = require("graphql");
const tweetType = require("../types/TweetType");
const models = require("../../models");

module.exports = {
  type: tweetType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    }
  },
  resolve: async (_, {id}) => {
    if (!id) {
      return null;
    }

    return await models.Tweet.findByPk(id);
  }
}