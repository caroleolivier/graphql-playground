import './components';
import React from 'react';
import { render } from 'react-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import { App } from './components/';

const client = new ApolloClient({
  uri: 'http://localhost:3099',
  cache: new InMemoryCache()
});

// client
//   .query({
//     query: gql`
//       query CanBeAnything {
//         feed {
//           description
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));


render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);