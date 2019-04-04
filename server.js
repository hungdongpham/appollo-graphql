// a development server for mocking API endpoints

const PORT = process.env.PORT || 8181;

const jsonGraphqlExpress = require('json-graphql-server');
const express = require('express');
const bodyParser = require('body-parser');
const graphQlData = require('./data/config');
const proxyGraphQL = require('./middleware/proxyGraphQL');

const allowCrossDomain = function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.header('Access-Control-Allow-Headers', '*');
  next();
};

const handleOptionsMethod = (req, res, next) => {
  // intercept OPTIONS method
  if (req.method == 'OPTIONS') {
    res.header('Allow', 'OPTIONS, GET, POST');
    res.sendStatus(200);
  } else {
    next();
  }
};

const app = express();
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use([allowCrossDomain, handleOptionsMethod]);
app.use('/graphql', proxyGraphQL);
app.use('/raw-graphql', jsonGraphqlExpress.default(graphQlData));
app.use('/graphiql', jsonGraphqlExpress.default(graphQlData));

console.log('serving graphql queries at /graphql');

app.listen(PORT);
console.log(`serving listening on ${PORT}`);
