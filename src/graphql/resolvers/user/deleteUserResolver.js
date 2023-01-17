const models = require("../../../models");

module.exports = (source, {id}) => {
  return models.User.destroy({
    where: {
      id,
    }
  })
}