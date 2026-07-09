import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const seConnecter = () => {
    localStorage.setItem('token', 'faux-jwt-token-demo');
    navigate('/dashboard', { state: { message: 'Connexion réussie, bienvenue !' } });
  };

  return (
    <div className="page">
      <div className="card" style={{ maxWidth: 380, margin: '40px auto', textAlign: 'center' }}>
        <h1>Connexion</h1>
        <p style={{ color: 'var(--muted)', marginBottom: 20 }}>Accédez à votre espace</p>
        <button onClick={seConnecter} style={{ width: '100%' }}>Se connecter</button>
      </div>
    </div>
  );
};

export default Login;