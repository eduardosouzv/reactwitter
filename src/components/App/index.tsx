import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../assets/styles/themes/default';
import GlobalStyles from '../../assets/styles/global';
import client from '../../services/utils/graphqlClient';

import Home from '../../pages/Home';

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <ApolloProvider client={client}>
        <Home />
        <GlobalStyles />
      </ApolloProvider>
    </ThemeProvider>
  );
}
