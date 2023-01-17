// TOCHECK

const models = require("../../../models");

module.exports = async (source, { username, name }, { tokenPayload }) => {
  // if(!tokenPayload) {
  //   return null;
  // }

  const user = await models.User.create({
    username,
    name
  });

  return user;
}