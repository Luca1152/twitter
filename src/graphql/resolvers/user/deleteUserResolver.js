const models = require("../../../models");

module.exports = (source, {id}, ctx) => {
  if (!ctx.tokenPayload || ctx.tokenPayload.role !== "ADMIN") {
    throw new Error("Not allowed");
  }

  return models.User.destroy({
    where: {
      id,
    }
  });
}
