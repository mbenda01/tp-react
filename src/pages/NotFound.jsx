import { Link } from 'react-router-dom';

const NotFound = () => (
  <div style={{ textAlign: 'center', marginTop: '4rem' }}>
    <h1>404 - Page introuvable</h1>
    <p>La page que vous cherchez n'existe pas.</p>
    <Link to="/accueil">Retour à l'accueil</Link>
  </div>
);

export default NotFound;