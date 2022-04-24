import { ApolloProvider } from '@apollo/client';

import client from '../../services/utils/graphqlClient';

import Home from '../../pages/Home';
import { ModalProvider } from '../../hooks/useModal';

export default function App() {
  return (
    <ModalProvider>
      <ApolloProvider client={client}>
        <Home />
      </ApolloProvider>
    </ModalProvider>
  );
}
