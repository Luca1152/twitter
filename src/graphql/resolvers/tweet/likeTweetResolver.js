const models = require("../../../models");

module.exports = async (source, {id}) => {
  await models.Tweet.update(
    {likes: models.sequelize.literal("likes + 1")},
    {where: {id: id}}
  );
  return true;
}