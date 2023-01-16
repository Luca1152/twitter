const {GraphQLObjectType} = require('graphql');
const usersQuery = require("./queries/usersQuery");

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: usersQuery
  }
});

module.exports = QueryType;
