import { useNavigate, useLocation } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const message = location.state?.message;

  const seDeconnecter = () => {
    localStorage.removeItem('token');
    navigate('/login', { replace: true });
  };

  return (
    <div>
      {message && <p className="msg-succes">{message}</p>}
      <h1>Tableau de bord</h1>
      <p style={{ color: 'var(--muted)', marginBottom: 16 }}>Vue d'ensemble de votre espace.</p>
      <button className="btn-danger" onClick={seDeconnecter}>Se déconnecter</button>
    </div>
  );
};

export default Dashboard;