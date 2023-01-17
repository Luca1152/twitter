const models = require("../../../models");

module.exports = async (source, {userId, followerId}, ctx) => {
  if (!ctx.tokenPayload || !["ADMIN", "USER"].includes(ctx.tokenPayload.role)) {
    throw new Error("Not allowed");
  }

  try {
    await models.UserFollowers.create({
      userId,
      followerId,
    })
    return true;
  } catch (e) {
    return false;
  }
}