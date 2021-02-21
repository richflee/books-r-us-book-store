import { ApolloClient } from '@apollo/client';
import cache from './graphql/cache';

const client = new ApolloClient({
  cache: cache,
  connectToDevTools: true,
  uri: 'http://localhost:4000/graphql'
});
export default client;