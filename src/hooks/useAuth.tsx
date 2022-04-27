import { gql, useQuery } from '@apollo/client';
import { createContext, ReactChild, useContext, useMemo } from 'react';

interface IAuthContext {
  currentUser: string;
}

const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      id
      username
    }
  }
`;

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: { children: ReactChild }) {
  const { data, loading, error } = useQuery(GET_CURRENT_USER);

  const currentUser = data?.getCurrentUser.username;

  if (error) {
    const unauthenticated = error.graphQLErrors.find(
      (error) => error.extensions.code === 'UNAUTHENTICATED'
    );

    if (unauthenticated) {
      console.log('UNAUTHENTICATED');
    }
  }

  const values = useMemo(
    () => ({
      currentUser: loading ? '' : currentUser,
    }),
    [data]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
