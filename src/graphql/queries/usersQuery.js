const {GraphQLList} = require("graphql");
const UserType = require("../types/UserType");
const models = require("../../models");

const usersQuery = {
  type: new GraphQLList(UserType),
  resolve: () => {
    return models.User.findAll();
  }
}

module.exports = usersQuery;