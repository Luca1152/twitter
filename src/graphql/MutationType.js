const {GraphQLObjectType} = require('graphql');

const createUserMutation = require('./mutations/user/createUserMutation');
const deleteUserMutation = require('./mutations/user/deleteUserMutation');

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: createUserMutation,
    deleteUser: deleteUserMutation,
  }
});

module.exports = MutationType;
