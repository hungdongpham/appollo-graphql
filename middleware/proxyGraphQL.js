// a simple query translation layer

const request = require('request-promise-native');

const formatGQL = (inputString) => {
  if (typeof inputString === 'string') {
    return inputString.replace(/[\s]+/g, ' ');
  }
  return inputString;
};

const capWords = (str) => {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1));
};

const isAllQuery = (query) => {
  return query.substring(0, 3) === 'all';
}

const transformQuery = (string) => {
  return isAllQuery ? string : capWords(string)
}


const camelCaseWords = str => str.replace(/\w\S*/g, txt => txt.charAt(0).toLowerCase() + txt.substr(1));

const returnFirstGroup = (m, p1) => p1;

const filterInboundMutation = (rawQuery) => {
  // done via string manipulation
  const q0 = rawQuery;
  // flatten the attributes block
  const q1 = q0.replace(/attributes:[\s]*\{([^}]+)\}/, returnFirstGroup);
  // remove the object identifier from the query
  const q2 = q1.replace(/[\w]+[\s]*\{([\w\s'",:]+)\}/, returnFirstGroup);
  const filteredQuery = q2;
  console.log('-> applied inbound mutation filter:', formatGQL(filteredQuery));
  return filteredQuery;
};

const filterInboundQuery = (rawQuery) => {
  // translate lowercase to capwords
  // e.g. { customer(id: 1) {id,city} } => { Customer(id: 1) {id,city} }
  const q1 = rawQuery.replace(/([\w]+)[\s]*\(/, (m, p1) => `${transformQuery(p1)}(`);
  // translate graph edges:  eg. { currentUser(id: 1) { paymentMethods { id } }
  const q2 = q1.replace(/\{[\s]*([\w]+)[\s]*\{/g, (m, p1) => `{ ${transformQuery(p1)} {`);
  // translate forms like { currentUser(id: 1) { foo } Customer { name } PaymentMethods { type }}}
  const q3 = q2.replace(/\}[\s]*([\w]+)[\s]*\{/g, (m, p1) => `} ${transformQuery(p1)} {`);
  const filteredQuery = q3;
  console.log('-> applied inbound query filter:', formatGQL(filteredQuery));
  return filteredQuery;
};

const filterInboundRequests = (rawQuery) => {
  if (rawQuery.match(/mutation[\s]*\{/)) {
    return filterInboundMutation(rawQuery);
  } else {
    if(rawQuery.match(/all/g)){
      return rawQuery;
    }
  }
  return filterInboundQuery(rawQuery);
};

const filterOutboundMutation = (key, data) => {
  const newKey = key.replace('update', '').toLowerCase();
  return {
    [key]: {
      [newKey]: data
    }
  };
};

const filterOutboundQuery = (key, data) => {
  const newKey = camelCaseWords(key);
  return { [newKey]: data };
};

const filterOutboundRequests = (rawOutput) => {
  const outputString = JSON.stringify(rawOutput);
  const q1 = outputString.replace(/:{"([A-Z]+[\w]+)"/g, (m, p1) => `:{"${camelCaseWords(p1)}"`);
  const filtered = JSON.parse(q1);
  return filtered;
};

const scrubErrorMessage = (rawError) => {
  const i = rawError.indexOf('{');
  if (i > -1) {
    const e = rawError.substr(i);
    return JSON.parse(e);
  }
  return rawError;
};

const proxyGraphQL = (req, res, next) => {
  if (req.method !== 'POST') {
    res.send('GET requests not supported; use a POST method or /graphiql');
    return;
  }
  let query = req.body.query;
  console.group('GraphQL Proxy Request ', new Date());
  if (!req.headers.rawquery) {
    query = filterInboundRequests(query);
  }
  console.log({query});
  request
    .post({
      url: 'http://localhost:8181/raw-graphql',
      json: { query }
    })
    .then((rawResponse) => {
      console.log('<- raw response', rawResponse);
      const filteredResponse = filterOutboundRequests(rawResponse);
      console.log('<- return payload', filteredResponse);
      console.groupEnd();
      res.send(filteredResponse);
    })
    .catch((error) => {
      console.error('!! Error Message', error.message);
      const errorResponse = scrubErrorMessage(error.message);
      console.groupEnd();
      res.send(errorResponse);
    });
};

module.exports = proxyGraphQL;
