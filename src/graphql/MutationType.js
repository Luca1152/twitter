const {GraphQLObjectType} = require('graphql');

const createTweetMutation = require('./mutations/tweet/createTweetMutation');
const createUserMutation = require('./mutations/user/createUserMutation');
const deleteUserMutation = require('./mutations/user/deleteUserMutation');
const followUserMutation = require('./mutations/user/followUserMutation');
const loginMutation = require('./mutations/user/loginMutation');

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createTweet: createTweetMutation,
    //deleteTweet: deleteTweetMutation,
    createUser: createUserMutation,
    deleteUser: deleteUserMutation,
    followUser: followUserMutation,
    login: loginMutation,
  }
});

module.exports = MutationType;
