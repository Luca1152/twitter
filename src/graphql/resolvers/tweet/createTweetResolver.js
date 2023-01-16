// TODO

const models = require("../../models");

module.exports = async (source, { firstName, lastName }, { tokenPayload }) => {
  if(!tokenPayload) {
    return null;
  }

  const tweet = await models.Tweet.create({
    text,
    likes,
    isRetweet,
    parent,
    author,
    replies,
    retweets
  });

  return user;
}