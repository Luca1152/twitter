const {GraphQLSchema} = require('graphql');

const QueryType = require('./QueryType')
const MutationType = require('./MutationType');

const Schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});

module.exports = Schema;