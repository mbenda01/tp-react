import { useNavigate, useLocation } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const message = location.state?.message; // bonus : message de bienvenue

  const seDeconnecter = () => {
    localStorage.removeItem('token');
    navigate('/login', { replace: true });
  };

  return (
    <div>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      <h1>Tableau de bord</h1>
      <button onClick={seDeconnecter}>Se déconnecter</button>
    </div>
  );
};

export default Dashboard;