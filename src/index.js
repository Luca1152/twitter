const express = require('express');
const {graphqlHTTP} = require('express-graphql');
const JWTMiddleware = require('./middlewares/JWTMiddleware');
const {Schema} = require('./graphql');
const expressPlayground = require('graphql-playground-middleware-express')
  .default

const app = express();

app.use(express.json());
app.get('/playground', expressPlayground({ endpoint: '/graphql' }))
app.use('/graphql', JWTMiddleware, graphqlHTTP({
  schema: Schema,
}));

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});