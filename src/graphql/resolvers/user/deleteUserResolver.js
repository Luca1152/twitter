const models = require("../../../models");
const Sequelize = require('sequelize');

module.exports = (source, {id}, {tokenPayload}) => {

  //Sequelize.query("UPDATE SQLITE_SEQUENCE SET SEQ=0 WHERE NAME='Users'");

  // if(!tokenPayload) { // || !(tokenPayload.role === 'ADMIN')
  //   return null;
  // }

  return models.User.destroy({
    where: {
      id,
    }
  });
}
