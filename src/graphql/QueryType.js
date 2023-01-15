const {GraphQLObjectType} = require('graphql');

const QueryType = new GraphQLObjectType({
  name: 'Query',
  fields: {}
});

module.exports = QueryType;
