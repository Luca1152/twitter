const {GraphQLNonNull, GraphQLInt, GraphQLList} = require("graphql");
const {Op} = require("sequelize");
const models = require("../../models");
const TweetType = require("../types/TweetType");

// Get the [n] most recent tweets created by users the user with this [id] is following
const userFeedQuery = {
  type: new GraphQLList(TweetType),
  args: {
    userId: {
      type: new GraphQLNonNull(GraphQLInt),
    },
    n: {
      type: new GraphQLNonNull(GraphQLInt),
    },
  },
  async resolve(_, {n, userId}, ctx) {
    if (!ctx.tokenPayload || !["ADMIN", "USER"].includes(ctx.tokenPayload.role)) {
      throw new Error("Not allowed");
    }

    const followingIds = await models.UserFollowers.findAll({
      where: {
        followerId: userId,
      }
    });
    const tweetsByUsersFollowed = await models.Tweet.findAll({
      where: {
        author: {
          [Op.in]: followingIds.map(item => item.userId)
        }
      }
    });
    const tweetsMetadata = await models.TweetMetadata.findAll({
      where: {
        tweetId: {
          [Op.in]: tweetsByUsersFollowed.map(item => item.id)
        }
      }
    });
    const sortedTweets = tweetsByUsersFollowed.sort(
      (a, b) => {
        const aMetadata = tweetsMetadata.find(item => item.tweetId === a.id);
        const bMetadata = tweetsMetadata.find(item => item.tweetId === b.id);
        return new Date(bMetadata.tweetDate).getTime() - new Date(aMetadata.tweetDate).getTime();
      }
    );
    const nMostRecentTweets = sortedTweets.slice(0, n);

    return nMostRecentTweets;
  }
}

module.exports = userFeedQuery;