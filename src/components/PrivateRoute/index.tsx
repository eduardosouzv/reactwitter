import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function PrivateRoute({ element }: { element: JSX.Element }) {
  const { isTokenOnClientValid } = useAuth();

  return isTokenOnClientValid() ? element : <Navigate to="/login" />;
}
