// TODO

const models = require("../../models");
module.exports = async (source, { firstName, lastName }, { tokenPayload }) => {
  if(!tokenPayload) {
    return null;
  }

  const user = await models.User.create({
    username,
    name,
    tweets,
    following,
    followers
  });

  return user;
}