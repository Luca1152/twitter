const {GraphQLObjectType} = require('graphql');

const createUserMutation = require('./mutations/user/createUserMutation');
const deleteUserMutation = require('./mutations/user/deleteUserMutation');
const createTweetMutation = require('./mutations/tweet/createTweetMutation');
const followUserMutation = require('./mutations/user/followUserMutation');

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createTweet: createTweetMutation,
    //deleteTweet: deleteTweetMutation,
    createUser: createUserMutation,
    deleteUser: deleteUserMutation,
    followUser: followUserMutation,
  }
});

module.exports = MutationType;
