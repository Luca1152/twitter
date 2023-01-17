// TODO

const models = require("../../../models");

module.exports = async (source, {text, likes, parentTweetId, author}, {tokenPayload}) => {
  // if(!tokenPayload) {
  //   return null;
  // }

  if (args.text.length > 280) {
    throw new Error('Text is limited to a maximum of 280 characters.')
  }

  const tweet = await models.Tweet.create({
    text,
    likes,
    parentTweetId,
    author,
  });

  return tweet;
}