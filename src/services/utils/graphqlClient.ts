import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

interface Data {
  user: {
    id: string;
    username: string;
  };
  token: string;
}

const authLink = setContext((_, { headers }) => {
  const localStorageUser = localStorage.getItem('currentUser') || '';

  const data: Data = JSON.parse(localStorageUser);

  return {
    headers: {
      ...headers,
      authorization: data.token || '',
    },
  };
});

export default new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
