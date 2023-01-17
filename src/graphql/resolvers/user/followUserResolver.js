const models = require("../../../models");

module.exports = async (source, {userId, followerId}) => {
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