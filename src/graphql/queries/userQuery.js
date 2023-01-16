const {GraphQLInt, GraphQLNonNull} = require("graphql");
const userType = require("../types/UserType");
const models = require("../../models");

module.exports = {
  type: userType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLInt),
    }
  },
  resolve: async (_, { id }) => {
    if(!id) {
      return null;
    }

    return models.User.findByPk(id);
  }
}
