import { ApolloProvider } from '@apollo/client';

import client from '../../services/utils/graphqlClient';

import Home from '../../pages/Home';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
}
