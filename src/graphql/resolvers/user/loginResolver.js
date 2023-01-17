const models = require("../../../models");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../../../../config/jwt');

module.exports = async (source, {username, password}) => {
  const user = await models.User.findOne({
    where: {
      username,
    }
  });

  if (!user) {
    return {
      token: null,
    }
  }

  const passwordMatches = await bcrypt.compare(password, user.password);

  if (passwordMatches) {
    const token = jwt.sign({userID: user.id, role: user.role}, JWT_SECRET);

    return {
      token,
    }
  }

  return {
    token: null,
  }
}