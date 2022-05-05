import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';

import PrivateRoute from '../PrivateRoute';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute element={<Home />} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
