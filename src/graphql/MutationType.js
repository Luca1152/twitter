const {GraphQLObjectType} = require('graphql');
const createReplyMutation = require('./mutations/tweet/createReplyMutation');
const createRetweetMutation = require('./mutations/tweet/createRetweetMutation');
const createTweetMutation = require('./mutations/tweet/createTweetMutation');
// likeTweet
const createUserMutation = require('./mutations/user/createUserMutation');
const deleteUserMutation = require('./mutations/user/deleteUserMutation');
const followUserMutation = require('./mutations/user/followUserMutation');
const loginMutation = require('./mutations/user/loginMutation');

const MutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createReply: createReplyMutation,
    createRetweet: createRetweetMutation,
    createTweet: createTweetMutation,
    // likeTweet
    createUser: createUserMutation,
    deleteUser: deleteUserMutation,
    followUser: followUserMutation,
    login: loginMutation,
  }
});

module.exports = MutationType;
