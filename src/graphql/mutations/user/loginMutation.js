const {
    GraphQLNonNull,
    GraphQLString,
} = require('graphql');

const userSessionType = require('../../types/UserSessionType');
const loginResolver = require('../../resolvers/user/loginResolver');

module.exports = {
    type: userSessionType,
    args: {
        username: {
            type: new GraphQLNonNull(GraphQLString),
        },
        password: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    resolve: loginResolver,
}