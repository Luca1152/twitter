const models = require("../../../models");

module.exports = async (source, {author, parentId}, ctx) => {
  if (!ctx.tokenPayload || !["ADMIN", "USER"].includes(ctx.tokenPayload.role)) {
    throw new Error("Not allowed");
  }

  return await models.Tweet.create({
    author,
    parentId,
  });
}