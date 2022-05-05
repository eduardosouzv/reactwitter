import { useNavigate } from 'react-router-dom';
import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';
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
  login: ({ username, password }: LoginParam) => Promise<void>;
  registerUser: ({ username, password }: LoginParam) => Promise<void>;
  isTokenOnClientValid: () => boolean;
}

interface LoginParam {
  username: string;
  password: string;
}
interface IUser {
  id: string;
  name: string;
}

const GET_CURRENT_USER = gql`
  query {
    getCurrentUser {
      id
      username
    }
  }
`;

const AUTHENTICATE_USER = gql`
  query Login($username: String!, $password: String!) {
    loginUser(username: $username, password: $password) {
      token
    }
  }
`;

const REGISTER_USER = gql`
  mutation RegisterUser($username: String!, $password: String!) {
    registerUser(username: $username, password: $password) {
      token
    }
  }
`;

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export function AuthProvider({ children }: { children: ReactChild }) {
  const navigate = useNavigate();

  const {
    data,
    loading: loadingCurrentUser,
    error,
    refetch,
  } = useQuery(GET_CURRENT_USER);
  const [authenticate] = useLazyQuery(AUTHENTICATE_USER);
  const [register] = useMutation(REGISTER_USER);

  const user: IUser = useMemo(
    () => ({
      id: data?.getCurrentUser.id,
      name: data?.getCurrentUser.username,
    }),
    [data]
  );

  function isTokenOnClientValid() {
    if (error || !localStorage.getItem('token')) {
      return false;
    }
    return true;
  }

  function logout() {
    localStorage.removeItem('token');
    navigate('/login');
  }

  async function login({ username, password }: LoginParam) {
    const { data } = await authenticate({
      variables: {
        username,
        password,
      },
    });

    const { token } = data.loginUser;
    localStorage.setItem('token', token);
    navigate('/');
    refetch();
  }

  async function registerUser({ username, password }: LoginParam) {
    const { data } = await register({
      variables: {
        username,
        password,
      },
    });

    const { token } = data.registerUser;
    localStorage.setItem('token', token);
    navigate('/');
    refetch();
  }

  const values = useMemo(
    () => ({
      user: loadingCurrentUser && error ? { id: '', name: '' } : user,
      logout,
      login,
      registerUser,
      isTokenOnClientValid,
    }),
    [data]
  );

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
