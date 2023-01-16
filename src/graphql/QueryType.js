const {GraphQLObjectType} = require('graphql');
const usersQuery = require("./queries/usersQuery");
const tweetsQuery = require("./queries/tweetsQuery");

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    users: usersQuery,
    tweets: tweetsQuery,
  }
});

module.exports = QueryType;
