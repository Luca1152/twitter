// TODO - check

const models = require("../../../models");

module.exports = async (source, {username, name}) => {
  return await models.User.create({
    username,
    name
  });
}