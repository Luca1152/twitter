// TODO
const loginResolver = require('../../resolvers/user/loginResolver');
const {GraphQLBoolean} = require("graphql/type");

module.exports = {
  // TODO
  type: GraphQLBoolean, // TODO
  resolve: loginResolver,
}