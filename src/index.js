import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { 
  ApolloClient,
  ApolloProvider, // This is imported here to make sure the data fetched here is available for the entire app
  HttpLink,
  InMemoryCache
} from '@apollo/client'

const client = new ApolloClient({
  // Manual cache setup was not required in earlier versions, while using Apollo Boost
  cache: new InMemoryCache(),
  // setup a link to the GraphQL endpoint using link attribute/property
  link: new HttpLink({
    // uri will take an input of a string
    uri: 'https://api.spacex.land/graphql/'
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>}
  </ApolloProvider>,
  document.getElementById('root')
);

