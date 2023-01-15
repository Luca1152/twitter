const express = require('express');
const {graphqlHTTP} = require('express-graphql');
// const JWTMiddleware = require('./middlewares/JWTMiddleware');
const schema = require('./graphql');

const app = express();

app.use(express.json());
app.use('/graphql', /*JWTMiddleware,*/ graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});