const models = require("../../../models");

module.exports = async (source, {text, author}, ctx) => {
  if (!ctx.tokenPayload || !["ADMIN", "USER"].includes(ctx.tokenPayload.role)) {
    throw new Error("Not allowed");
  }

  if (text.length > 280) {
    throw new Error('Text is limited to a maximum of 280 characters.')
  }

  return await models.Tweet.create({
    text,
    author,
  });
}