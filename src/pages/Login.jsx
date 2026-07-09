import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const seConnecter = () => {
    // Stocke un faux token JWT
    localStorage.setItem('token', 'faux-jwt-token-demo');
    // Redirige vers le dashboard, avec un state pour le message de bienvenue
    navigate('/dashboard', { state: { message: 'Connexion réussie, bienvenue !' } });
  };

  return (
    <div style={{ padding: '24px' }}>
      <h1>Connexion</h1>
      <button onClick={seConnecter}>Se connecter</button>
    </div>
  );
};

export default Login;