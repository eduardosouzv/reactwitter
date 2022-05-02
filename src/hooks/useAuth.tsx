import { useNavigate } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import {
  createContext,
  ReactChild,
  useContext,
  useEffect,
  useMemo,
} from 'react';

interface IAuthContext {
  user?: {
    id: string;
    name: string;
  };
  logout: () => void;
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
  const navigate = useNavigate();
  const { data, loading, error } = useQuery(GET_CURRENT_USER);
  const currentUser = data?.getCurrentUser.username;

  const user: {
    id: string;
    name: string;
  } = useMemo(
    () => ({
      id: data?.getCurrentUser.id,
      name: data?.getCurrentUser.username,
    }),
    [data]
  );

  useEffect(() => {
    if (error || !localStorage.getItem('token')) {
      navigate('/login');
    }
  }, [data]);

  function logout() {
    localStorage.removeItem('token');
    navigate('/login');
  }

  const values = useMemo(
    () => ({
      user: loading && error ? { id: '', name: '' } : user,
      logout,
    }),
    [data]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
