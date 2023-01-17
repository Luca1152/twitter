const models = require("../../../models");

module.exports = async (source, {author, parentId}) => {
  return await models.Tweet.create({
    author,
    parentId,
  });
}