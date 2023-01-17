const models = require("../../../models");

module.exports = async (source, {author, text, parentId}) => {
  if (text.length > 280) {
    throw new Error('Text is limited to a maximum of 280 characters.')
  }

  return await models.Tweet.create({
    author,
    text,
    parentId,
  });
}