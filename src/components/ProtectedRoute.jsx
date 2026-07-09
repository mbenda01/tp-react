import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem('token');

  // Pas de token → redirection vers /login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Token présent → afficher la route enfant
  return <Outlet />;
};

export default ProtectedRoute;