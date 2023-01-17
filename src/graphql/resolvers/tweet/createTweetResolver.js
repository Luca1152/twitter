// TODO
const models = require("../../../models");

module.exports = async (source, {text, likes, parentTweetId, author}) => {
  if (args.text.length > 280) {
    throw new Error('Text is limited to a maximum of 280 characters.')
  }

  return await models.Tweet.create({
    text,
    likes,
    parentTweetId,
    author,
  });
}