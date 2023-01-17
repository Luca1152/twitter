const {GraphQLObjectType} = require('graphql');

const createUserMutation = require('./mutations/user/createUserMutation');
const deleteUserMutation = require('./mutations/user/deleteUserMutation');
//const createTweetMutation = require('./mutations/tweet/createTweetMutation');
//const deleteTweetMutation = require('./mutations/tweet/deleteTweetMutation');

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createUser: createUserMutation,
    deleteUser: deleteUserMutation,
    //createTweet: createTweetMutation,
    //deleteTweet: deleteTweetMutation,
  }
});

module.exports = MutationType;
