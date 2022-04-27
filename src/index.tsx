import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import App from './components/App';

import './assets/styles/global.css';

import { ModalProvider } from './hooks/useModal';
import { AuthProvider } from './hooks/useAuth';

import client from './services/utils/graphqlClient';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <ModalProvider>
          <App />
        </ModalProvider>
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
