const express = require('express');
const {graphqlHTTP} = require('express-graphql');
// TODO: const JWTMiddleware = require('./middlewares/JWTMiddleware');
const {Schema} = require('./graphql');

const app = express();

app.use(express.json());
app.use('/graphql', /* TODO JWTMiddleware,*/ graphqlHTTP({
  schema: Schema,
  graphiql: true,
}));

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});