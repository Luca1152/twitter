const models = require("../../../models");

module.exports = async (source, {id}, ctx) => {
  if (!ctx.tokenPayload || !["ADMIN", "USER"].includes(ctx.tokenPayload.role)) {
    throw new Error("Not allowed");
  }

  await models.Tweet.update(
    {likes: models.sequelize.literal("likes + 1")},
    {where: {id: id}}
  );
  return true;
}