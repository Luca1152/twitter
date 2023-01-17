const models = require("../../../models");
const bcrypt = require('bcryptjs');
const SALT_ROUNDS = 8;

module.exports = async (source, {username, name, password, role}) => {

  if (!(role === 'ADMIN') && !(role === 'USER')) {
    throw new Error('Available roles are : ADMIN & USER.')
  }

  password = await bcrypt.hash(password, SALT_ROUNDS);

  return await models.User.create({
    username,
    name,
    password,
    role
  });
}